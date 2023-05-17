import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import "../css/constants.css";
import headerImg1 from "../assets/header1.svg";
import hamburger from "../assets/hamburger.svg";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import PopUp from "./registerPopUp";
import LoginPopUp from "./loginPopUp";
import { Darklighbttn } from "./dark-light-Btn";
export const Header = (props) => {
  const Menus = [{ signup: "Sign Up", login: "Login" }];
  const LoggedInMenu = [
    { wishlists: "wishlists", logout: "logout", myhost: "myhost" },
  ];
  const [open, setOpen] = useState(false);
  const [popUpSignUp, setPopUpSignUp] = useState(false);
  const [popUpLogin, setPopUpLogin] = useState(false);
  const [user, setUser] = useState(true);
  useEffect(() => {
    setUser(localStorage.getItem("username"));
  }, []);
  // WINDOWDER DARHAAR ALGA BOLOH
  const menuRef = useRef();
  const butRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== butRef.current) {
      setOpen(false);
    }
  });
  const logout = () => {
    localStorage.clear();
    window.location = "/";
  };
  return (
    <div>
      <PopUp ok={popUpSignUp} onClick={() => setPopUpSignUp(false)} />
      <LoginPopUp hey={popUpLogin} onClose={() => setPopUpLogin(false)} />
      <div className={props.headerClass || "headerBig"}>
        {/* <div className="headerBig"> */}
        <div className="header">
          <Link to={"/"}>
            <div className="headerContent1">
              <img className="headerLogo" src={logo} alt="" />
              <div className={props.Haichu || "headerhaichu"}>Хайчихуу?</div>
            </div>
          </Link>
          <div className="headerContent">
            <div className="darkLight">
              <Darklighbttn />
            </div>
            <Link to={"/hostpage"}>
              <button className="headerHostBtn">Become A Host</button>
            </Link>
            <div>
              <div className="headerContentRight">
                <div className="headerContentRight1">
                  <img
                    ref={menuRef}
                    className="headerHamburger"
                    alt=""
                    onClick={() => setOpen(!open)}
                    src={hamburger}
                  />
                </div>
                <img className="headerContentRight2" alt="" src={headerImg1} />
              </div>
              {user ? (
                <div>
                  {open && (
                    <div
                      style={{
                        // background: "#2c3342",
                        background: "red",
                        width: "160px",
                        height: "150px",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        position: "absolute",
                        borderRadius: "6px",
                        boxShadow: "0px 0px 8px rgba(194, 198, 204, 0.6)",
                      }}
                    >
                      <div
                        style={{
                          background: "green",
                          width: "100px",
                          height: "50px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {LoggedInMenu.map((menul) => (
                          <ul ref={butRef} key={menul}>
                            <li
                              style={{
                                border: "none",
                                width: "100px",
                                height: "40px",
                                color: "#484848;",
                              }}
                            >
                              {menul.wishlists}
                            </li>
                            <li
                              style={{
                                border: "none",
                                width: "100px",
                                height: "40px",
                                color: "#484848;",
                              }}
                            >
                              {menul.myhost}
                            </li>
                            <div
                              style={{
                                border: "1px solid #E0E2E6",
                                width: "100px",
                                height: "0px",
                                color: "#9A9A9A",
                              }}
                            ></div>
                            <li
                              onClick={logout}
                              style={{
                                border: "none",
                                width: "100px",
                                height: "40px",
                                color: "#9A9A9A",
                              }}
                            >
                              {menul.logout}
                            </li>
                          </ul>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  {open && (
                    <div
                      style={{
                        background: "#2c3342",
                        width: "160px",
                        height: "100px",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        position: "absolute",
                        borderRadius: "6px",
                        boxShadow: "0px 0px 8px rgba(194, 198, 204, 0.6)",
                        color: "white",
                        top: "78px",
                        right: "48px",
                      }}
                    >
                      <div
                        style={{
                          background: "none",
                          width: "100px",
                          height: "50px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {Menus.map((menu) => (
                          <ul ref={butRef} key={menu}>
                            <li
                              onClick={() => setPopUpSignUp(true)}
                              style={{
                                border: "none",
                                width: "100px",
                                height: "40px",
                              }}
                            >
                              {menu.signup}
                            </li>
                            <li
                              onClick={() => setPopUpLogin(true)}
                              style={{
                                border: "none",
                                width: "100px",
                                height: "40px",
                              }}
                            >
                              {menu.login}
                            </li>
                          </ul>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
