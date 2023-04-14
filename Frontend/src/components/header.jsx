import React from "react";
import "../css/header.css";
import headerImg1 from "../assets/header1.svg";
import hamburger from "../assets/hamburger.svg";
import logo from "../assets/Logo.svg";
export const Header = () => {
  return (
    <div className="headerBig">
      <div className="header">
        <div className="headerContent1">
          <img className="headerLogo" alt="" src={logo} />
          <div className="headerhaichu">Хайчихуу?</div>
        </div>
        <div className="headerContent">
          <button className="headerHostBtn">Become A Host</button>
          <button className="headerContentRight">
            <button className="headerContentRight1">
              <img className="headerHamburger" alt="" src={hamburger} />
            </button>
            <img className="headerContentRight2" alt="" src={headerImg1} />
          </button>
        </div>
      </div>
    </div>
  );
};
