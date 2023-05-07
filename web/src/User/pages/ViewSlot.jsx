import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


const style = {
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",

  p: 4,
};

const Viewslots = () => {


  const [p1,setP1]=useState(false);
  const [p2,setP2]=useState(false);
  const [p3,setP3]=useState(false);
  const [p4,setP4]=useState(false);
  const [p5,setP5]=useState(false);
  const [p6,setP6]=useState(false);
  const [p7,setP7]=useState(false);
  const [p8,setP8]=useState(false);
  const [p9,setP9]=useState(false);
  const [p10,setP10]=useState(false);
  const [p11,setP11]=useState(false);
  const [p12,setP12]=useState(false);
  const [p13,setP13]=useState(false);
  const [p14,setP14]=useState(false);
  const [p15,setP15]=useState(false);
  const [p16,setP16]=useState(false);
  const [p17,setP17]=useState(false);
  const [p18,setP18]=useState(false);
  const [p19,setP19]=useState(false);
  const [p20,setP20]=useState(false);
  const [p21,setP21]=useState(false);
  const [p22,setP22]=useState(false);
  const [p23,setP23]=useState(false);
  const [p24,setP24]=useState(false);
  const [p25,setP25]=useState(false);
  const [p26,setP26]=useState(false);
  const [p27,setP27]=useState(false);
  const [p28,setP28]=useState(false);
  const [p29,setP29]=useState(false);
  const [p30,setP30]=useState(false);

  const [q1,setq1]=useState(false);
  const [q2,setq2]=useState(false);
  const [q3,setq3]=useState(false);
  const [q4,setq4]=useState(false);
  const [q5,setq5]=useState(false);
  const [q6,setq6]=useState(false);
  const [q7,setq7]=useState(false);
  const [q8,setq8]=useState(false);
  const [q9,setq9]=useState(false);
  const [q10,setq10]=useState(false);
  const [q11,setq11]=useState(false);
  const [q12,setq12]=useState(false);
  const [q13,setq13]=useState(false);
  const [q14,setq14]=useState(false);
  const [q15,setq15]=useState(false);
  const [q16,setq16]=useState(false);
  const [q17,setq17]=useState(false);
  const [q18,setq18]=useState(false);
  const [q19,setq19]=useState(false);
  const [q20,setq20]=useState(false);
  const [q21,setq21]=useState(false);
  const [q22,setq22]=useState(false);
  const [q23,setq23]=useState(false);
  const [q24,setq24]=useState(false);
  const [q25,setq25]=useState(false);
  const [q26,setq26]=useState(false);
  const [q27,setq27]=useState(false);
  const [q28,setq28]=useState(false);
  const [q29,setq29]=useState(false);
  const [q30,setq30]=useState(false);

  const [r1,setr1]=useState(false);
  const [r2,setr2]=useState(false);
  const [r3,setr3]=useState(false);
  const [r4,setr4]=useState(false);
  const [r5,setr5]=useState(false);
  const [r6,setr6]=useState(false);
  const [r7,setr7]=useState(false);
  const [r8,setr8]=useState(false);
  const [r9,setr9]=useState(false);
  const [r10,setr10]=useState(false);
  const [r11,setr11]=useState(false);
  const [r12,setr12]=useState(false);
  const [r13,setr13]=useState(false);
  const [r14,setr14]=useState(false);
  const [r15,setr15]=useState(false);
  const [r16,setr16]=useState(false);
  const [r17,setr17]=useState(false);
  const [r18,setr18]=useState(false);
  const [r19,setr19]=useState(false);
  const [r20,setr20]=useState(false);
  const [r21,setr21]=useState(false);
  const [r22,setr22]=useState(false);
  const [r23,setr23]=useState(false);
  const [r24,setr24]=useState(false);
  const [r25,setr25]=useState(false);
  const [r26,setr26]=useState(false);
  const [r27,setr27]=useState(false);
  const [r28,setr28]=useState(false);
  const [r29,setr29]=useState(false);
  const [r30,setr30]=useState(false);

  const [s1,sets1]=useState(false);
  const [s2,sets2]=useState(false);
  const [s3,sets3]=useState(false);
  const [s4,sets4]=useState(false);
  const [s5,sets5]=useState(false);
  const [s6,sets6]=useState(false);
  const [s7,sets7]=useState(false);
  const [s8,sets8]=useState(false);
  const [s9,sets9]=useState(false);
  const [s10,sets10]=useState(false);
  const [s11,sets11]=useState(false);
  const [s12,sets12]=useState(false);
  const [s13,sets13]=useState(false);
  const [s14,sets14]=useState(false);
  const [s15,sets15]=useState(false);
  const [s16,sets16]=useState(false);
  const [s17,sets17]=useState(false);
  const [s18,sets18]=useState(false);
  const [s19,sets19]=useState(false);
  const [s20,sets20]=useState(false);
  const [s21,sets21]=useState(false);
  const [s22,sets22]=useState(false);
  const [s23,sets23]=useState(false);
  const [s24,sets24]=useState(false);
  const [s25,sets25]=useState(false);
  const [s26,sets26]=useState(false);
  const [s27,sets27]=useState(false);
  const [s28,sets28]=useState(false);
  const [s29,sets29]=useState(false);
  const [s30,sets30]=useState(false);












  const navigate = useNavigate();
  const today = new Date();
  const { airport } = useParams();
  const [data,setData] = useState();
  const [dateFrom, setDateFrom] = useState(
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear()
  );
  const [dateTo, setDateTo] = useState(
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear()
  );
  const [timeFrom, setTimeFrom] = useState(
    today.getHours() + ":" + today.getMinutes()
  );
  const [timeTo, setTimeTo] = useState(
    today.getHours() + ":" + today.getMinutes()
  );

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

  const payNow = (s) => {
    let formData = new FormData();
    formData.append("fromDate", dateFrom);
    formData.append("toDate", dateTo);
    formData.append("toTime", timeFrom);
    formData.append("fromTime", timeTo);
    formData.append("userID", window.sessionStorage.getItem("uid"));
    formData.append("airPort", airport);
    formData.append("slot", s);

    axios
      .post("http://localhost/Parking/api/SlotInsert.php", formData, {
        "Content-Type": "multipart/form-data",
      })
      .then((response) => response.data)
      .then((data) => {
        if (data === false) {
          alert("Failed");
        } else {
          navigate("../../payment/" + data);
        }
      });
  };
  const fetchData = (s) => {
    let formData = new FormData();
    formData.append("fromDate", dateFrom);
    formData.append("toDate", dateTo);
    formData.append("toTime", timeFrom);
    formData.append("fromTime", timeTo);
    formData.append("airPort", airport);
   

    axios
      .post("http://localhost/Parking/api/SelectData.php", formData, {
        "Content-Type": "multipart/form-data",
      })
      .then((response) => response.data)
      .then((data) => {

        data.map((e)=>{
          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              const value = data[key].slot;
              switch (value) {
                case "P1":
                  setP1(true);
                  break;
                case "P2":
                  setP2(true);
                  break;
                case "P3":
                  setP3(true);
                  break;
                case "P4":
                  setP4(true);
                  break;
                case "P5":
                  setP5(true);
                  break;
                default:
                  break;
              }
            }
          }
        })
      });
  };
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true); 
    fetchData();
  };
  setTimeout(() => {
    handleScrollUp();// your function here
  }, 1000); // call the function after 1 second
  

  const handleScrollUp = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
   
  };


  return (
    <div>
      <div className=" w-full h-full pt-14 bg-gradient-to-b from-cyan-500 to-indigo-500">
        <div align="center" className="text-white text-4xl pt-32 pb-20">
          <b>{airport} International Airport</b>
        </div>
        <div className="flex justify-center pb-10">
          <div className=" text-white font-bold">
            Date From{" "}
            <input
              type="date"
              className=" text-black text-s bg-transparent"
              onChange={(e) => setDateFrom(e.target.value)}
            />
          </div>

          <div className="ml-6  text-white font-bold">
            Date to{" "}
            <input
              type="date"
              className=" text-black text-s bg-transparent"
              onChange={(e) => setDateTo(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center ">
          <div className=" text-white font-bold">
            Time From{" "}
            <input
              type="time"
              className=" text-black text-s bg-transparent"
              onChange={(e) => setTimeFrom(e.target.value)}
            />
          </div>

          <div className="ml-6  text-white font-bold">
            Time to{" "}
            <input
              type="time"
              className=" text-black text-s bg-transparent"
              onChange={(e) => setTimeTo(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center pb-32">
          <button 
          onClick={()=>{handleClick(),setTimeout()}}
          className=" m-20   rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 bg-black  duration-300  h-10 font-bold dark:font-bold w-20 shadow-xl  text-white">
            SUBMIT
          </button>
        </div>
        {isVisible && <div>
        <div className=" flex justify-between mt-60 ml-80 mr-80">
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
                      <button
                        onClick={() => payNow("P1")}
                        className={`${ p1 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P1
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("P2")}
                        className={`${ p2 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P2
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("P3")}
                        className={`${ p3 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P3
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("P4")}
                        className={`${ p4 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P4
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("P5")}
                        className={`${ p5 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P5
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 grid ">
                    <div>
                      <button
                        onClick={() => payNow("P6")}
                        className={`${ p6 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P6
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("P7")}
                        className={`${ p7 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P7
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("P8")}
                        className={`${ p8 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P8
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("P9")}
                        className={`${ p9 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P9
                      </button>
                    </div>

                    <div>
                      <button
                        onClick={() => payNow("P10")}
                        className={`${ p10 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P10
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex content-between pl-14 w-1/3 pt-12 rounded-2xl m-2 bg-gradient-to-b from-cyan-300 to-cyan-600   ">
                  <div className="w-1/2 grid">
                    <div>
                      <button
                        onClick={() => payNow("P11")}
                        className={`${ p11 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P11
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("P12")}
                        className={`${ p12 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P12
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("P13")}
                        className={`${ p13 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P13
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("P14")}
                        className={`${ p14 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P14
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("P15")}
                        className={`${ p15 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P15
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 grid ">
                    <div>
                      <button
                        onClick={() => payNow("P16")}
                        className={`${ p16 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P16
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("P17")}
                        className={`${ p17 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P17
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("P18")}
                        className={`${ p18 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P18
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("P19")}
                        className={`${ p19 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P19
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("P20")}
                        className={`${ p20 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P20
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex content-between pl-14 w-1/3 pt-12 rounded-2xl m-2 bg-gradient-to-b from-cyan-300 to-cyan-600    ">
                  <div className="w-1/2 grid">
                    <div>
                      <button
                        onClick={() => payNow("P21")}
                        className={`${ p21 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P21
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("P22")}
                        className={`${ p22 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P22
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("P23")}
                        className={`${ p23 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P23
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("P24")}
                        className={`${ p24 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P24
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("P25")}
                        className={`${ p25 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P25
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 grid ">
                    <div>
                      <button
                        onClick={() => payNow("P26")}
                        className={`${ p26 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P26
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("P27")}
                        className={`${ p27 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P27
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("P28")}
                        className={`${ p28 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P28
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("P29")}
                        className={`${ p29 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        P29
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("P30")}
                        className={`${ p30 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
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
                      <button
                        onClick={() => payNow("Q1")}
                        className={`${ q1 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q1
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("Q2")}
                        className={`${ q2 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q2
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("Q3")}
                        className={`${ q3 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q3
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("Q4")}
                        className={`${ q4 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q4
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("Q5")}
                        className={`${ q5 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q5
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 grid ">
                    <div>
                      <button
                        onClick={() => payNow("Q6")}
                        className={`${ q6 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q6
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("Q7")}
                        className={`${ q7 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q7
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("Q8")}
                        className={`${ q8 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q8
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("Q9")}
                        className={`${ q9 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q9
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("Q10")}
                        className={`${ q10 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q10
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex content-between pl-14 w-1/3 pt-12 rounded-2xl m-2 bg-gradient-to-b from-cyan-300 to-cyan-600   ">
                  <div className="w-1/2 grid">
                    <div>
                      <button
                        onClick={() => payNow("Q11")}
                        className={`${ q11 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q11
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("Q12")}
                        className={`${ q12 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q12
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("Q13")}
                        className={`${ q13 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q13
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("Q14")}
                        className={`${ q14 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q14
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("Q15")}
                        className={`${ q15 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q15
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 grid ">
                    <div>
                      <button
                        onClick={() => payNow("Q16")}
                        className={`${ q16 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q16
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("Q17")}
                        className={`${ q17 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q17
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("Q18")}
                        className={`${ q18 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q18
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("Q19")}
                        className={`${ q19 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q19
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("Q20")}
                        className={`${ q20 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q20
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex content-between pl-14 w-1/3 pt-12 rounded-2xl m-2 bg-gradient-to-b from-cyan-300 to-cyan-600    ">
                  <div className="w-1/2 grid">
                    <div>
                      <button
                        onClick={() => payNow("Q21")}
                        className={`${ q21? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q21
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("Q22")}
                        className={`${ q22 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q22
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("Q23")}
                        className={`${ q23 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q23
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("Q24")}
                        className={`${ q24 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q24
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("Q25")}
                        className={`${ q25 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q25
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 grid ">
                    <div>
                      <button
                        onClick={() => payNow("Q26")}
                        className={`${ q26 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q26
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("Q27")}
                        className={`${ q27 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q27
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("Q28")}
                        className={`${ q28 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q28
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("Q29")}
                        className={`${ q29 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        Q29
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("Q30")}
                        className={`${ q30 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
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
                      <button
                        onClick={() => payNow("R1")}
                        className={`${ r1 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R1
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("R2")}
                        className={`${ r2 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R2
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("R3")}
                        className={`${ r3 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R3
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("R4")}
                        className={`${ r4 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R4
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("R5")}
                        className={`${ r5 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R5
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 grid ">
                    <div>
                      <button
                        onClick={() => payNow("R6")}
                        className={`${ r6 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R6
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("R7")}
                        className={`${ r7 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R7
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("R8")}
                        className={`${ r8 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R8
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("R9")}
                        className={`${ r9 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R9
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("R10")}
                        className={`${ r10 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R10
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex content-between pl-14 w-1/3 pt-12 rounded-2xl m-2 bg-gradient-to-b from-cyan-300 to-cyan-600   ">
                  <div className="w-1/2 grid">
                    <div>
                      <button
                        onClick={() => payNow("R11")}
                        className={`${ r11 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R11
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("R12")}
                        className={`${ r12 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R12
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("R13")}
                        className={`${ r13 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R13
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("R14")}
                        className={`${ r14 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R14
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("R15")}
                        className={`${ r15 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R15
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 grid ">
                    <div>
                      <button
                        onClick={() => payNow("R16")}
                        className={`${ r16 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R16
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("R17")}
                        className={`${ r17 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R17
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("R18")}
                        className={`${ r18 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R18
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("R19")}
                        className={`${ r19 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R19
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("R20")}
                        className={`${ r20 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R20
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex content-between pl-14 w-1/3 pt-12 rounded-2xl m-2 bg-gradient-to-b from-cyan-300 to-cyan-600    ">
                  <div className="w-1/2 grid">
                    <div>
                      <button
                        onClick={() => payNow("R21")}
                        className={`${ r21 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R21
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("R22")}
                        className={`${ r22 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R22
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("R23")}
                        className={`${ r23 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R23
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("R24")}
                        className={`${ r24 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R24
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("R25")}
                        className={`${ r25 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R25
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 grid ">
                    <div>
                      <button
                        onClick={() => payNow("R26")}
                        className={`${ r26 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R26
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("R27")}
                        className={`${ r27 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R27
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("R28")}
                        className={`${ r28 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R28
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("R29")}
                        className={`${ r29 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        R29
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("R30")}
                        className={`${ r30 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
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
                      <button
                        onClick={() => payNow("S1")}
                        className={`${ s1 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S1
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("S2")}
                        className={`${ s2 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S2
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("S3")}
                        className={`${ s3 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S3
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("S4")}
                        className={`${ s4 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S4
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("S5")}
                        className={`${ s5 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S5
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 grid ">
                    <div>
                      <button
                        onClick={() => payNow("S6")}
                        className={`${ s6 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S6
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("S7")}
                        className={`${ s7 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S7
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("S8")}
                        className={`${ s8 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S8
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("S9")}
                        className={`${ s9 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S9
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("S10")}
                        className={`${ s10 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S10
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex content-between pl-14 w-1/3 pt-12 rounded-2xl m-2 bg-gradient-to-b from-cyan-300 to-cyan-600   ">
                  <div className="w-1/2 grid">
                    <div>
                      <button
                        onClick={() => payNow("S11")}
                        className={`${ s11 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S11
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("S12")}
                        className={`${ s12 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S12
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("S13")}
                        className={`${ s13 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S13
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("S14")}
                        className={`${ s14 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S14
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("S15")}
                        className={`${ s15 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S15
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 grid ">
                    <div>
                      <button
                        onClick={() => payNow("S16")}
                        className={`${ s16 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S16
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("S17")}
                        className={`${ s17 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S17
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("S18")}
                        className={`${ s18 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S18
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("S19")}
                        className={`${ s19 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S19
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("S20")}
                        className={`${ s20 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S20
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex content-between pl-14 w-1/3 pt-12 rounded-2xl m-2 bg-gradient-to-b from-cyan-300 to-cyan-600    ">
                  <div className="w-1/2 grid">
                    <div>
                      <button
                        onClick={() => payNow("S21")}
                        className={`${ s21 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S21
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("S22")}
                        className={`${ s22 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S22
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("S23")}
                        className={`${ s23 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S23
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("S24")}
                        className={`${ s24 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S24
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("S25")}
                        className={`${ s25 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S25
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 grid ">
                    <div>
                      <button
                        onClick={() => payNow("S26")}
                        className={`${ s26 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S26
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("S27")}
                        className={`${ s27 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S27
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("S28")}
                        className={`${ s28 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S28
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("S29")}
                        className={`${ s29 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
                        <DirectionsCarFilledRoundedIcon fontSize="large" />
                        S29
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => payNow("S30")}
                        className={`${ s30 ? 'bg-red-500 hover:bg-red-400 ' : 'bg-lime-500 hover:bg-lime-400 '}  text-white  transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110  duration-300   font-bold dark:font-bold   text-xl w-2/4 h-3/4  rounded-md `}
                      >
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
        </div>}
      </div>
    </div>
  );
};

export default Viewslots;
