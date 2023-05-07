import React, { Component } from 'react'
import profilepicdemo from "../data/profilepicdemo.jpg";
import { Link } from "react-router-dom";
import axios from 'axios';

export default class Viewprofile extends Component {
  constructor(props){
    super(props);
    this.state= {
      userData: [],
    }
  }

  componentDidMount(){
    axios
      .get("http://localhost/Parking/api/UserData.php?uid="+sessionStorage.getItem("uid"))
      .then((response) => response.data)
      .then((data) => {
        this.setState({userData: data})
      });
  }
  
  render() {
    return (
      <>
      
      <div className=" grid justify-center pt-28 w-full h-auto pb-96   bg-gradient-to-b from-sky-500 to-indigo-500">
        <div className="flex ">
          <div className="pt-10">
          
            <div
              className=" pl-10 rounded-full h-60 w-60 hover:shadow-neutral-900 text-white bg-black"
              style={{
                backgroundImage: "url(" + profilepicdemo + ")",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="grid pl-24 ">
            <div className="flex justify-start pt-10 pl-6 pb-2">
              
              <div className=" text-xl  font-bold pr-9  text-black">Name</div>
              
              <div className="pl-28">
              {this.state.userData.map((result,key)=>(
                <input
                  className=" placeholder:text-slate-600 font-bold dark:font-bold rounded-md h-10 w-80 bg-slate-400 text-black "
                  type="text"
                  id="admin_manager"
                  defaultValue={result.user_name}
                  placeholder="Enter Name"
                />
                ))}
              </div>
            </div>
            <div className="flex justify-start ">
              <div className=" text-xl  font-bold pr-8 pl-6 pb-5  text-black">
                Contact
              </div>
              <div className="pl-24">
              {this.state.userData.map((result,key)=>(
                <input
                  className=" placeholder:text-slate-600 font-bold dark:font-bold rounded-md h-10 w-80 bg-slate-400 text-black "
                  type="text"
                  id="admin_manager"
                  defaultValue={result.user_contact}
                  placeholder="Enter Contact"
                />
                ))}
              </div>
            </div>
            <div className="flex justify-start ">
              <div className=" text-xl  font-bold pr-7 pl-6 pb-5 text-black">
                Address
              </div>
              <div className="pl-24">
                {" "}
                {this.state.userData.map((result,key)=>(
                <input
                  className=" placeholder:text-slate-600 font-bold dark:font-bold rounded-md h-10 w-80 bg-slate-400 text-black "
                  type="text"
                  id="admin_manager"
                  defaultValue={result.user_address}
                  placeholder="Enter Address"
                />
                ))}
              </div>
            </div>
            <div className="flex justify-start ">
              <div className=" text-xl  font-bold pr-8 pl-6 pb-5 text-black">
                E-mail
              </div>
              <div className="pl-28">
              {this.state.userData.map((result,key)=>(
                <input
                  className=" placeholder:text-slate-600 font-bold dark:font-bold rounded-md h-10 w-80 bg-slate-400 text-black "
                  type="text"
                  id="admin_manager"
                  defaultValue={result.user_mail}
                  placeholder="Enter E-mail"
                />
                ))}
              </div>
            </div>
            
           
          </div>
        </div>
        <div className="flex justify-center text-center pt-10">
          <div className="transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 bg-black duration-300 rounded-md h-10 font-bold dark:font-bold w-28  text-white">
            <Link to="/user/Editprofile">Edit Profile</Link>
          </div>
        </div>
      </div>
    </>
    )
  }
}




