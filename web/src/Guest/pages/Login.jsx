import axios from "axios";
import React, { Component } from "react";
import  {Link}  from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_email: "",
      user_password: "",
      type: "",
      id: "",
    };
  }
  inputSet = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  saveData = (e) => {
    e.preventDefault();


    const formData = new FormData();

    formData.append('email',this.state.user_email);
    formData.append('password',this.state.user_password);

    axios({

      method: "POST",
      url: "http://localhost/Parking/api/Login.php",
      data: formData,
      headers:{ "Content-Type": "multipart/form-data"},

      }).then((response) => response.data)
      .then((data) => {
        console.log(data);
        if (JSON.stringify(data) === "[]") {
          alert("Invalid User");
        }
        else if (data[1] === "Admin") {
          window.sessionStorage.setItem('aid', data[0].admin_id);
          window.location = '/Admin';
        }
        else if (data[1] === "Manager") {
          window.sessionStorage.setItem('mid', data[0].manager_id);
          window.location = '/Manager';
        }
        else if (data[1] === "User") {
          window.sessionStorage.setItem('uid', data[0].user_id);
          window.location = '/User';
        }
        
      });
  };
  render() {
    return (
      <div>
        <div className="flex justify-center h-auto w-full bg-gradient-to-b from-gray-800 to-gray-500">
          <div className=" pt-48 pb-80">
            <div className="flex  pt-6">
              <div className=" text-xl  font-bold pr-16  text-black">
                E-Mail
              </div>
              <div className="">
                <input
                onChange={this.inputSet}
                  className=" placeholder:text-slate-600 font-bold dark:font-bold rounded-md h-10 w-80 bg-slate-400 text-black "
                  type="text"
                  name="user_email"
                  id="admin_manager"
                  placeholder="Enter the E-Mail "
                />
              </div>
            </div>

            <div className="flex  pt-6">
              <div className=" text-xl  font-bold pr-7  text-black">
                Password
              </div>
              <div className="">
                <input
                name="user_password"
                onChange={this.inputSet}
                  className=" placeholder:text-slate-600 font-bold dark:font-bold rounded-md h-10 w-80 bg-slate-400 text-black "
                  type="text"
                  id="admin_manager"
                  placeholder="Enter the address "
                />
              </div>
            </div>

            <div className="pt-12 grid  justify-center">
              <button onClick={this.saveData} className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 bg-black duration-300 rounded-md h-9 font-bold dark:font-bold w-20  text-white">
                SUBMIT
              </button>
            </div>
            <div className="flex pt-10">
              <div className="font-bold text-white pr-2">
                Don't have an account
              </div>
              <div className="font-bold text-blue-500">
                <Link to="/registration">Register ?</Link>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
