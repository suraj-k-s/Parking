import axios from "axios";
import parking from "../data/parking.jpg";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function BookingList() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "booking_date",
      headerName: "Booking Date",
      width: 150,
    },
    {
      field: "booking_from_date",
      headerName: "For Date",
      width: 150,
    },
    {
      field: "booking_to_date",
      headerName: "To Date",
      width: 150,
    },
    {
      field: "booking_from_time",
      headerName: "For Time",
      width: 150,
    },
    {
      field: "booking_for_time",
      headerName: "To Time",
      width: 150,
    },
    {
      field: "user_name",
      headerName: "User",
      width: 150,
    },
    {
      field: "slot",
      headerName: "Slot",
      width: 150,
    },
  ];

  const fetchData = () => {
    axios
      .get("http://localhost/Parking/api/FetchData.php")
      .then((response) => response.data)
      .then((data) => {
        setRows(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const [rows, setRows] = useState([]);
  return (
    <div>
      <div className=" bg-gradient-to-b from-sky-500 to-indigo-500 w-full h-auto z-10 fixed">
        <div
          className="w-full  mix-blend-overlay "
          style={{
            backgroundImage: "url(" + parking + ")",
            backgroundSize: "cover",
            height: "90vh",
          }}
        ></div>
      </div>
      <div className="z-20 relative">
        <div className="text-white text-8xl font-bold grid justify-center pt-56  ">
          <Box sx={{ height: 400, width: "100%", background: "white", }}>
            <DataGrid
            
              rows={rows}
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
      </div>
    </div>
  );
}
