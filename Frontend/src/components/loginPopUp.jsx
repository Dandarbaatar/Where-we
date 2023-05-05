import React from "react";
import "../css/loginsignup.css";
import Xbutt from "../assets/Vector (2).svg";
function loginPopUp({ hey, onClose }) {
  if (!hey) return null;
  return (
    <div className="overlay">
      <ToastContainer />
      <div className="signup_container">
        <div className="signup_container_small">
          <div className="signup_container_small_1">
            <div className="signup_header">
              <div className="signup_login">Login</div>
              <button className="signup_butt" onClick={onClose}>
                <img src={Xbutt} alt="" />
              </button>
            </div>
            <div className="signup_line"></div>
            <div>
              <div className="signup_sicz">
                <div className="signup_pr">Username</div>
                <input
                  onChange={(e) => setUsername1(e.target.value)}
                  className="signup_inp"
                  type="text"
                  placeholder="      Enter your Username here"
                />
              </div>
              <div className="signup_sicz">
                <div className="signup_pr">Password</div>
                <input
                  onChange={(e) => setPassword1(e.target.value)}
                  className="signup_inp"
                  type="text"
                  placeholder="      Enter your Password"
                />
              </div>
            </div>
            <div>
              <button onClick={loginUser} className="signup_butt1">
                Login
              </button>
              <button className="signup_butt2">or Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPopUp;
