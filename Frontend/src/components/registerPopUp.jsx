import React from "react";
import "../css/loginsignup.css";
import Xbutt from "../assets/Vector (2).svg";
function registerPopUp({ ok, onClick }) {
  if (!ok) return null;
  return (
    <div className="overlay">
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
                  placeholder="      Enter your Name"
                />
              </div>
              <div className="Login_sicz">
                <div className="Login_pr">Phone number</div>
                <input
                  className="Login_inp"
                  type="text"
                  placeholder="      Enter your Phone Number"
                />
              </div>
              <div className="Login_sicz">
                <div className="Login_pr">Gmail</div>
                <input
                  className="Login_inp"
                  type="text"
                  placeholder="      Enter your Gmail"
                />
              </div>
              <div className="Login_sicz">
                <div className="Login_pr">Password</div>
                <input
                  className="Login_inp"
                  type="text"
                  placeholder="      Enter your Password"
                />
              </div>
            </div>
            <div>
              <button className="Login_butt1">Register</button>
              <button className="Login_butt2">or Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default registerPopUp;
