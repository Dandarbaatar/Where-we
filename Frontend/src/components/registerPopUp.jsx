import React, { useState } from "react";
import "../css/loginsignup.css";
import Xbutt from "../assets/Vector (2).svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function RegisterPopUp({ ok, onClick, hey }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");

  if (!ok) {
    return null;
  }
  const postData = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    axios
      .post("http://localhost:8000/user", {
        email: email,
        password: password,
        username: username,
        phonenumber: phone,
      })
      .then((res) => toast(res?.data))
      .catch((err) => console.log(err));
  };
  const displayLogin = () => {
  };
  return (
    <div className="overlay">
      <ToastContainer />
      <div className="Login_container">
        <div className="Login_container_small">
          <div className="Login_container_small_1">
            <div className="Login_header">
              <div className="Login_login">Sign Up</div>
              <button className="Login_butt" onClick={onClick}>
                <img src={Xbutt} alt="" />
              </button>
            </div>
            <div className="Login_line"></div>
            <div>
              <div className="Login_sicz">
                <div className="Login_pr">Username</div>
                <input
                  className="Login_inp"
                  type="text"
                  placeholder="Enter your Name"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="Login_sicz">
                <div className="Login_pr">Phone number</div>
                <input
                  className="Login_inp"
                  type="text"
                  placeholder="Enter your Phone Number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="Login_sicz">
                <div className="Login_pr">Gmail</div>
                <input
                  className="Login_inp"
                  type="text"
                  placeholder="Enter your Gmail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="Login_sicz">
                <div className="Login_pr">Password</div>
                <input
                  className="Login_inp"
                  type="text"
                  placeholder="Enter your Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button className="Login_butt1" onClick={postData}>
                Register
              </button>
              <button onClick={displayLogin} className="Login_butt2">
                or Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPopUp;
