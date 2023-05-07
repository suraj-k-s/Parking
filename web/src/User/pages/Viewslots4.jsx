import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";

const style = {
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",

  p: 4,
};

const Viewslots = () => {
  const [openP, setOpenP] = React.useState(false);
  const handleOpenP = () => setOpenP(true);
  const handleCloseP = () => setOpenP(false);

  const [openQ, setOpenQ] = React.useState(false);
  const handleOpenQ = () => setOpenQ(true);
  const handleCloseQ = () => setOpenQ(false);

  const [openR, setOpenR] = React.useState(false);
  const handleOpenR = () => setOpenR(true);
  const handleCloseR = () => setOpenR(false);

  const [openS, setOpenS] = React.useState(false);
  const handleOpenS = () => setOpenS(true);
  const handleCloseS = () => setOpenS(false);
  return (
    <div>
      <div className=" w-full h-full pt-14 bg-gradient-to-b from-cyan-500 to-indigo-500">
        <div align="center" className="text-white text-4xl"><b>Thiruvananthapuram International Airport</b></div>
        <div className=" flex justify-between p-10 pl-80 pr-80">
          <div className=" text-white bg-slate-800 rounded-3xl">
            <Button className=" w-60 h-60 " onClick={handleOpenP}>
              P SECTION PARKING
            </Button>
          </div>
          <Modal
            open={openP}
            onClose={handleCloseP}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              className=" absolute top-1/2 left-1/2 w-3/4 h-3/4 rounded-3xl bg-gradient-to-b from-cyan-500 to-indigo-500"
              sx={style}
            >
              <div className="flex h-full">
                <div className="flex content-between pl-14 w-1/3 pt-12 rounded-2xl m-2 bg-gradient-to-b from-cyan-300 to-cyan-600   ">
                  <div className="w-1/2 grid">
                    <div>
                      <button className="text-white   bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md ">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        
                        P1
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P2
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P3
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P4
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P5
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 grid ">
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P6
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P7
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P8
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P9
                      </button>
                    </div>
                    
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P10
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex content-between pl-14 w-1/3 pt-12 rounded-2xl m-2 bg-gradient-to-b from-cyan-300 to-cyan-600   ">
                  <div className="w-1/2 grid">
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P11
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P12
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P13
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P14
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P15
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 grid ">
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P16
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P17
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P18
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P19
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P20
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex content-between pl-14 w-1/3 pt-12 rounded-2xl m-2 bg-gradient-to-b from-cyan-300 to-cyan-600    ">
                  <div className="w-1/2 grid">
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P21
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P22
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P23
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P24
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P25
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 grid ">
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P26
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P27
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P28
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P29
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P30
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </Modal>
          <div className=" text-white bg-slate-800 rounded-3xl">
            <Button className=" w-60 h-60 " onClick={handleOpenQ}>
              Q SECTION PARKING
            </Button>
          </div>
          <Modal
          
            open={openQ}
            onClose={handleCloseQ}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              className=" absolute top-1/2 left-1/2 w-3/4 h-3/4 rounded-3xl bg-gradient-to-b from-cyan-500 to-indigo-500"
              sx={style}
            >
              <div className="flex h-full">
                <div className="flex content-between pl-14 w-1/3 pt-12 rounded-2xl m-2 bg-gradient-to-b from-cyan-300 to-cyan-600   ">
                  <div className="w-1/2 grid">
                    <div>
                      <button className="text-white   bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q1
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q2
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q3
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q4
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q5
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 grid ">
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q6
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q7
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q8
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q9
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q10
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex content-between pl-14 w-1/3 pt-12 rounded-2xl m-2 bg-gradient-to-b from-cyan-300 to-cyan-600   ">
                  <div className="w-1/2 grid">
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q11
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q12
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q13
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q14
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q15
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 grid ">
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q16
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q17
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q18
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q19
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q20
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex content-between pl-14 w-1/3 pt-12 rounded-2xl m-2 bg-gradient-to-b from-cyan-300 to-cyan-600    ">
                  <div className="w-1/2 grid">
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q21
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q22
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q23
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q24
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q25
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 grid ">
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q26
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q27
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q28
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q29
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q30
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
        <div className="flex justify-between p-10 pl-80 pr-80">
          <div className=" text-white bg-slate-800 rounded-3xl">
            <Button className=" w-60 h-60 " onClick={handleOpenR}>
              R SECTION PARKING
            </Button>
          </div>
          <Modal
            open={openR}
            onClose={handleCloseR}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              className=" absolute top-1/2 left-1/2 w-3/4 h-3/4 rounded-3xl bg-gradient-to-b from-cyan-500 to-indigo-500"
              sx={style}
            >
              <div className="flex h-full">
                <div className="flex content-between pl-14 w-1/3 pt-12 rounded-2xl m-2 bg-gradient-to-b from-cyan-300 to-cyan-600   ">
                  <div className="w-1/2 grid">
                    <div>
                      <button className="text-white   bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R1
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R2
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R3
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R4
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R5
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 grid ">
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R6
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R7
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R8
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R9
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R10
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex content-between pl-14 w-1/3 pt-12 rounded-2xl m-2 bg-gradient-to-b from-cyan-300 to-cyan-600   ">
                  <div className="w-1/2 grid">
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R11
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R12
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R13
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R14
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R15
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 grid ">
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R16
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R17
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R18
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R19
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R20
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex content-between pl-14 w-1/3 pt-12 rounded-2xl m-2 bg-gradient-to-b from-cyan-300 to-cyan-600    ">
                  <div className="w-1/2 grid">
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R21
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R22
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R23
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R24
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R25
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 grid ">
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R26
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R27
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R28
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R29
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R30
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </Modal>
          <div className=" text-white bg-slate-800 rounded-3xl">
            <Button className=" w-60 h-60 " onClick={handleOpenS}>
              S SECTION PARKING
            </Button>
          </div>
          <Modal
            open={openS}
            onClose={handleCloseS}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              className=" absolute top-1/2 left-1/2 w-3/4 h-3/4 rounded-3xl bg-gradient-to-b from-cyan-500 to-indigo-500"
              sx={style}
            >
              <div className="flex h-full">
                <div className="flex content-between pl-14 w-1/3 pt-12 rounded-2xl m-2 bg-gradient-to-b from-cyan-300 to-cyan-600   ">
                  <div className="w-1/2 grid">
                    <div>
                      <button className="text-white   bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S1
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S2
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S3
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S4
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S5
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 grid ">
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S6
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S7
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S8
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S9
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S10
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex content-between pl-14 w-1/3 pt-12 rounded-2xl m-2 bg-gradient-to-b from-cyan-300 to-cyan-600   ">
                  <div className="w-1/2 grid">
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S11
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S12
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S13
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S14
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S15
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 grid ">
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S16
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S17
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S18
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S19
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S20
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex content-between pl-14 w-1/3 pt-12 rounded-2xl m-2 bg-gradient-to-b from-cyan-300 to-cyan-600    ">
                  <div className="w-1/2 grid">
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S21
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S22
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S23
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S24
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S25
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 grid ">
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S26
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S27
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S28
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S29
                      </button>
                    </div>
                    <div>
                      <button className="text-white  bg-lime-500 w-2/4 h-3/4 text-xl font-bold rounded-md">
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S30
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default Viewslots;