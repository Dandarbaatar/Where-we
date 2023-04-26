import React from "react";
import "../App.css";
import headerImg1 from "../assets/header1.svg";
import hamburger from "../assets/hamburger.svg";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
export const Header = (props) => {
  return (
    <div className={props.headerClass || "headerBig"}>
      <div className="header">
        <div className="headerContent1">
          <img className="headerLogo" src={logo} />
          <div className={props.Haichu || "headerhaichu"}>Хайчихуу?</div>
        </div>
        <div className="headerContent">
          <Link to={"/hostpage"}>
            <button className="headerHostBtn">Become A Host</button>
          </Link>
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
