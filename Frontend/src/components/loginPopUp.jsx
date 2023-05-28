import React, { useState, useEffect } from "react";
import "../css/loginsignup.css";
import "../css/constants.css";
import Xbutt from "../assets/Vector (2).svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
function LoginPopUp({ hey, onClose }) {
  const [username1, setUsername1] = useState("");
  const [password1, setPassword1] = useState("");

  const loginUser = async () => {
    try {
      const res = await axios({
        url: "http://localhost:8000/login",
        method: "POST",
        data: {
          password: password1,
          username: username1,
        },
        headers: {
          // authorization: `bearer ${token}`,
        },
      });

      if (res?.status === 200) {
        const token = res?.data?.token;
        const id = res?.data?.id;
        localStorage.setItem("token", token);
        localStorage.setItem("username", username1);
        localStorage.setItem("id", id);
        toast("Successfully logged in");
        window.location.reload();
      }
    } catch (err) {
      toast(err.message);
    }
  };
  // // const useKeyPress = async (targetKey) => {
  // //   const downHandler = async ({ key }) => {
  // //     if (key === "Enter") {
  // //       await loginUser();
  // //     }
  // //   };
  // //   useEffect(() => {
  // //     window.addEventListener("keydown", downHandler);
  // //     return () => {
  // //       window.removeEventListener("keydown", downHandler);
  // //     };
  // //   }, []);
  // };
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
                  placeholder="Enter your Username here"
                />
              </div>
              <div className="signup_sicz">
                <div className="signup_pr">Password</div>
                <input
                  onChange={(e) => setPassword1(e.target.value)}
                  className="signup_inp"
                  type="password"
                  placeholder="Enter your Password"
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
