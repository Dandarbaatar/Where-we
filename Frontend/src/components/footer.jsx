import React from "react";
import "../App.css";
import "../css/constants.css";
import logo from "../assets/Logo.svg";
import facebook from "../assets/fbicon.svg";
import twitter from "../assets/twittericon.svg";
import instagram from "../assets/instaicon.svg";
import linkedin from "../assets/linkedinicon.svg";
// import playstore from "../assets/playstore.svg";
// import applestore from "../assets/appstore.svg";
function Footer() {
  return (
    <div className="Footer_container">
      <div className="Footer_container_small">
        <div className="Footer_first">
          <img width="150px" src={logo} alt="" />
          <div
            style={{
              width: "15vw",
              fontFamily: "arial",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "30px",
              color: "var(--gray)",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </div>
          <div
            style={{
              width: "16vw",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* <button className="Footer_buttons">
              <img src={playstore} alt="" /> PlayStore
            </button>
            <button className="Footer_buttons">
              <img src={applestore} alt="" /> AppleStore
            </button> */}
          </div>
        </div>
        <div className="Footer_second">
          <div className="Footer_titles">COMPANY</div>
          <div className="Footer_informations">About us</div>
          <div className="Footer_informations">Legal information</div>
          <div className="Footer_informations">Contact us</div>
          <div className="Footer_informations">Blogs</div>
        </div>
        <div className="Footer_third">
          <div className="Footer_titles">HELP CENTER</div>
          <div className="Footer_informations">Find a Property?</div>
          <div className="Footer_informations">How to Host?</div>
          <div className="Footer_informations">Why us?</div>
          <div className="Footer_informations">FAQs</div>
          <div className="Footer_informations">Rental guides</div>
        </div>
        <div className="Footer_four">
          <div className="Footer_titles">CONTACT INFO</div>
          <div className="Footer_informations">Phone:</div>
          <div className="Footer_informations">Email:</div>
          <div className="Footer_informations">Location:</div>
          <div
            style={{
              width: "7vw",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
