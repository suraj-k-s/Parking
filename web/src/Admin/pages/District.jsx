import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";

function District() {
  const [district, setDistrict] = useState("");
  const [districtData, setDistrictData] = useState([]);

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
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              onClick={() => districtDelete(params.row.district_id)}
            />
          </>
        );
      },
    },
  ];

  const districtDelete = (id) => {
    axios
      .get("http://localhost/Parking/api/District.php?id=" + id)
      .then((response) => response.data)
      .then((data) => {
        alert(data);
        fetchData();
      });
  };

  const insertData = () => {
    var dat = {
      district: district,
    };

    axios
      .post("http://localhost/Parking/api/District.php", dat)
      .then((response) => {
        if (response.data === true) {
          alert("Inserted");
        } else {
          alert("Failed");
        }
      });
  };

  const fetchData = () => {
    axios
      .get("http://localhost/Parking/api/District.php")
      .then((response) => response.data)
      .then((data) => {
        setDistrictData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="  pt-6 pb-80">
      <div className="grid justify-center text-xl font-bold pt-20 text-purple-800">
        DISTRICT REGISTRATION
      </div>
      <div className="grid justify-center pt-5 ">
        <input
          className=" font-bold dark:font-bold rounded-md h-10 w-80 bg-slate-500 dark:bg-slate-700 text-black dark:text-white"
          type="text"
          id="admin_district"
          placeholder="Enter the name of the district"
          onKeyUp={(e) => setDistrict(e.target.value)}
        />
      </div>
      <div className="pt-4 grid justify-center">
        <button
          onClick={insertData}
          className="rounded-md h-9 font-bold dark:font-bold w-20 bg-purple-800 dark:bg-slate-900 text-white dark:text-slate-400"
        >
          SUBMIT
        </button>
      </div>
      <Box sx={{ height: 400, width: "50%", margin: "0 auto" }}>
        <DataGrid
          rows={districtData}
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
}

export default District;
