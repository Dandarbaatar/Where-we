import { Header } from "../components/header";
import { HomeCard } from "../components/homeCard.jsx";
import { HomeCard2 } from "../components/homeCard2";
import Footer from "../components/footer.jsx";

import { useEffect, useState } from "react";
import Zurh from "../assets/homeCardLike.svg";
import axios from "axios"
import "../App.css"

import { Link } from "react-router-dom";
import "../css/home.css";
import "../css/constants.css";
import { SearchBar } from "../components/searchbar";
export const Home = () => {
  const [details, setDetails] = useState([]);
  const [types, setTypes] = useState("");
  const [data , setData ] = useState([]);
  const [images, setImages] = useState("")
 useEffect(()=>{
  axios.get("http://localhost:8000/details/").then((response) => setData(response?.data.data)).catch((error) =>console.log(error))
  
 }, []) 
  console.log(data)
  const arr = [1, 3, 4, 5];

  const darhaar = (el) => {
    console.log(el);
    // window.location.href = `${el}`
  }

  return (
    
    <div className="Home">
      <div className="homeBig">
        <Header headerClass="headerBigNone" Haichu="headerhaichu1" />
        <div className="homePage1">
          <div className="homePage1Content">
            <div className="homePage1Topic">FIND</div>
            <div className="homePage1Contents">
              <div
                onClick={() => setTypes("apartment")}
                className="homePage1Content1"
              >
                Apartment
              </div>
              <div
                onClick={() => setTypes("flat")}
                className="homePage1Content1"
              >
                Flats
              </div>
              <div
                onClick={() => setTypes("hostel")}
                className="homePage1Content1"
              >
                Hostels
              </div>
              <div
                onClick={() => setTypes("villa")}
                className="homePage1Content1"
              >
                Villas
              </div>
            </div>
          </div>
        </div>
        <SearchBar types={types} />
      </div>

      <div className="homePage2">
        <div className="homePage2Content1">
          <div className="homePage2Content1Texts">
            <div className="homePage2Content1Text">Latest on the</div>
            <div className="homePage2Content1Text">Property Listining</div>
          </div>
          <div className="homePage2Content1Zuras"></div>
        </div>
        <div className="homePage2Content2Cards">
          {data.map((e) => {
            return <div onClick={()=>window.location.href = `detail?${e._id}`}>
            <div   className="homeCard" style={{backgroundImage:`url(${e.image[0].zurag0})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"8px"}}>
            <div className="homeCardDiv">
              <button className="homeCardBtn">
                <img alt="" className="homeCardImg1" src={Zurh} />
              </button>
            </div>
            <div className="homeCardContent1">
              <div className="homeCardContent">
                <img className="homeCardContentImg" />
                <div className="homeCardContentText1">Well Furnished {e.Placetype}</div>
                <div className="homeCardContentText2">100 Smart Street, LA, USA</div>
              </div>
            </div>
          </div>
          </div>
          })}
        </div>
        
      </div>
      <div className="homePage3">
        <div className="homePage2Content1">
          <div className="homePage2Content1Texts">
            <div className="homePage2Content1Text">Top rated</div>
            <div className="homePage2Content1Text">Properties</div>
          </div>
          <div className="homePage2Content1Zuras"></div>
        </div>
        <div className="homePage2Content2Cards">
        {data.map((e) => {
            return <div onClick={()=>window.location.href = `detail?${e._id}`}>
            <div   className="homeCard" style={{backgroundImage:`url(${e.image[0].zurag0})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"8px"}}>
            <div className="homeCardDiv">
              <button className="homeCardBtn">
                <img alt="" className="homeCardImg1" src={Zurh} />
              </button>
            </div>
            <div className="homeCardContent1">
              <div className="homeCardContent">
                <img className="homeCardContentImg" />
                <div className="homeCardContentText1">Well Furnished {e.Placetype}</div>
                <div className="homeCardContentText2">100 Smart Street, LA, USA</div>
              </div>
            </div>
          </div>
          </div>
          })}
        </div>
      </div>
      <div className="homePage4">
        <div className="homePage4Content">
          <div className="homePage4ContentText1">Try Hosting With Us</div>
          <div className="homePage4ContentText2">
            Earn extra just by renting your property...
          </div>
          <Link to={"/hostpage"}>
            <button className="homePage4ContentBtn">Become A Host</button>
          </Link>
        </div>
        <div className="homePage4Img"></div>
      </div>
      <div className="homePage5">
        <div className="homePage2Content1">
          <div className="homePage2Content1Texts">
            <div className="homePage2Content1Text">Featured Properties</div>
            <div className="homePage2Content1Text">on our Listing</div>
          </div>
          <div className="homePage2Content1Zuras"></div>
        </div>
        <div className="homePage5cards">
          {data.map((e) => {
            return  <div className="homeCard2" onClick={()=>window.location.href = `detail?${e._id}`}>
            <div className="homeCard2Top" style={{backgroundImage:`url(${e.image[0].zurag0})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"8px"}}>
              <div className="homeCard2TopContent">
                <div className="homeCard2TopContentImg">
                  <img className="zurh" src={Zurh} />
                </div>
                <div className="homeCard2TopContentPrice">
                  <div className="homeCard2TopContentPrices">{e?.price}</div>
                  <div className="homeCard2TopContentPriceImg">
                    <div className="homeCard2Tsegnud">
                      {arr.map((e) => {
                        return <div className="homeCard2Tseg"></div>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="homeCard2Under">
              <div className="homeCard2UnderText1">Well Furnished {e?.Placetype}</div>
              <div className="homeCard2UnderText2">100 Smart Street, LA, USA </div>
            </div>
          </div>;
          })}
        </div>
        {/* <div className="homePage5cards">
          {arr.map((e) => {
            return <HomeCard2 />;
          })}
        </div> */}
      </div>
      <Footer />
    </div>
  );
};