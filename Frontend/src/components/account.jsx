import React from "react";
import "../App.css";
import Acc from "../assets/acc.svg";
import { Header } from "./header";
import Footer from "./footer";
import Checker from "../assets/ddd.svg";
import star from "../assets/star.svg";
export const Account = () => {
  const username = localStorage.getItem("username");
  return (
    <div className="acc">
      <Header />
      <div className="accContent">
        <div className="accContent1">
          <div className="accContent1Text1">
            <img className="accContent1Text1Img" src={Acc} />
            <div className="accContent1Text1Upload">Upload a Photo</div>
          </div>
          <div className="accContent1Text2">
            <div className="accContent1Text2Content1">
              Identity Verification
            </div>
            <div className="accContent1Text2Content2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </div>
          </div>
          <div className="accContent1Text3">
            <div className="accContent1Text3User">{username}</div>
            <div className="accContent1Text3content">
              <div className="accContent1Text3Check1">
                <img src={Checker} />
                <div className="accContent1Text3Check1Text">
                  Email Confirmed
                </div>
              </div>
              <div className="accContent1Text3Check2">
                <img src={Checker} />
                <div className="accContent1Text3Check1Text">
                  Mobile Confirmed
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accContent2">
          <div className="accContent2Text1">
            <div className="accContent2Text1User">{username}</div>
            <div className="accContent2Text1Date">Joined in 2021</div>
          </div>
          <button className="accContent2Text2Btn">Edit Profile</button>
          <div className="accContent2Text3">
            <img src={star} />
            <div className="accContent2Text3Review">0 Reviews</div>
          </div>
          <div className="accContent2Zuras"></div>
          <div className="accContent2Text4">Reviewed By You</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
