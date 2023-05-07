import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
const Place = () => {
  const [district, setDistrict] = useState("");
  const [districtData, setDistrictData] = useState([]);
  const [place, setPlace] = useState("");
  const [placeData, setPlaceData] = useState([]);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 130,
    },
    {
      field: "district_name",
      headerName: "District",
      width: 260,
    },
    {
      field: "place_name",
      headerName: "Place",
      width: 260,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              onClick={() => placeDelete(params.row.place_id)}
            />
          </>
        );
      },
    },
  ];
  const fetchData = () => {
    axios
      .get("http://localhost/Parking/api/District.php")
      .then((response) => response.data)
      .then((data) => {
        setDistrictData(data);
      });
      axios
      .get("http://localhost/Parking/api/Place.php")
      .then((response) => response.data)
      .then((data) => {
        setPlaceData(data);
      });
  };
  const placeDelete = (id) => {
    axios
      .get("http://localhost/Parking/api/Place.php?id=" + id)
      .then((response) => response.data)
      .then((data) => {
        alert(data);
        fetchData();
      });
  };

  const insertData = () => {
    var dat = {
      district: district,
      place: place,
    };

    axios
      .post("http://localhost/Parking/api/Place.php", dat)
      .then((response) => {
        if (response.data === true) {
          alert("Inserted");
        } else {
          alert("Failed");
        }
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="  pt-6 pb-80">
      <div className="grid justify-center text-xl font-bold pt-20 text-purple-800">
        PLACE REGISTRATION
      </div>
      <div className="grid justify-center pt-5 ">
        <Box sx={{ height: 50, width: 320 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">District</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="District"
              onKeyUp={(e) => setDistrict(e.target.value)}
            >
              {districtData.map((res,key) => (
                <MenuItem key={key} value={res.district_id}>{res.district_name}</MenuItem>
              ))}

            </Select>
          </FormControl>
        </Box>
      </div>

      <div className="grid justify-center pt-5 ">
        <input onKeyUp={(e) => setPlace(e.target.value)}
          className=" font-bold dark:font-bold rounded-md h-10 w-80 bg-slate-500 dark:bg-slate-700  text-slate-800 dark:text-white"
          type="text"
          id="admin_district"
          placeholder="Enter the name of the Place"
        />
      </div>
      <div className="pt-4 grid justify-center">
        <button onClick={insertData} className="rounded-md h-9 font-bold dark:font-bold w-20 bg-purple-800 dark:bg-slate-900 text-white dark:text-slate-400">
          SUBMIT
        </button>
      </div>
      <Box sx={{ height: 400, width: "70%", margin: "0 auto" }}>
        <DataGrid
          rows={placeData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default Place;
