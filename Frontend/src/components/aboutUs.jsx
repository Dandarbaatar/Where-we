import React from "react";
import "../App.css";
import fb from "../assets/fbicon.svg";
export const AboutUs = () => {
  return (
    <div className="about">
      <div className="aboutUs">Манай багийн гишүүд</div>
      <div className="Medeelel">
        <div className="Medeelel1">
          <div className="aboutImg1"></div>
          <div className="aboutName">Чингүн Э.</div>
          <div className="aboutRole">Web Developer</div>
          <div className="aboutSuragch">
            "Pinecone" академийн 2-р жилийн Програмын ангийн сурагч.
          </div>
          <a
            className="aboutA"
            href="https://www.facebook.com/rataabenedrenugnihc"
          >
            <img src={fb} />
          </a>
        </div>
        <div className="Medeelel1">
          <div className="aboutImg2"></div>
          <div className="aboutName">Эрмүүн Х. (A.K.A Dandarbaatar)</div>
          <div className="aboutRole">Web Developer</div>
          <div className="aboutSuragch">
            "Pinecone" академийн 2-р жилийн Програмын ангийн сурагч.
          </div>
          <a className="aboutA" href="https://www.facebook.com/EeGiiPsycho/">
            <img src={fb} />
          </a>
        </div>
        <div className="Medeelel1">
          <div className="aboutImg3"></div>
          <div className="aboutName">Оргил Б.</div>
          <div className="aboutRole">Web Developer</div>
          <div className="aboutSuragch">
            "Pinecone" академийн 2-р жилийн Програмын ангийн сурагч.
          </div>
          <a className="aboutA" href="https://www.facebook.com/orgil.en.7">
            <img src={fb} />
          </a>
        </div>
        <div className="Medeelel1">
          <div className="aboutImg4"></div>
          <div className="aboutName">Сүхбат М.</div>
          <div className="aboutRole">Web Developer</div>
          <div className="aboutSuragch">
            "Pinecone" академийн 2-р жилийн Програмын ангийн сурагч.
          </div>
          <a className="aboutA" href="https://www.facebook.com/sukhbat.suki">
            <img src={fb} />
          </a>
        </div>
      </div>
    </div>
  );
};
