import { Header } from "./header";
import React from "react";
import "../App.css";
import Footer from "../components/footer";
import Checker from "../assets/ddd.svg";
import Acc from "../assets/acc.svg";
import cancel from "../assets/cancel.svg";
export const AccEdit = () => {
  const username = localStorage.getItem("username");
  return (
    <div className="accEdit">
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
          <div className="accEditInps">
            <div className="accEditInps1">
              <div className="accEditInps1About">About</div>
              <input className="accEditInps1Inp3" />
            </div>
            <div className="accEditInps2">
              <div className="accEditInps1About">Location</div>
              <input className="accEditInps1Inp2" />
            </div>
            <div className="accEditInps3">
              <div className="accEditInps1About">Work</div>
              <input className="accEditInps1Inp2" />
            </div>
          </div>
          <div className="accEditTexts">
            <div className="accEditText">
              All the required user information can be added here...
            </div>
            <div className="accEditBtns">
              <button className="accEditBtn1">
                <img src={cancel} />
                <div className="accEditBtnCancel">cancel</div>
              </button>
              <button className="accEditBtn2">save</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
