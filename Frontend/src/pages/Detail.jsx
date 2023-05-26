import { Header } from "../components/header";
import "../css/detail.css";
import "../css/constants.css";
import sad from "../assets/asd.jpeg";
import love from "../assets/Heart.svg";
import share from "../assets/Share.svg";
import { Boxes } from "../components/boxes";
import bedroom from "../assets/bedroom.svg";
import bathroom from "../assets/bathroom.svg";
import car from "../assets/carsvg.svg";
import pet from "../assets/petsvg.svg";
import property from "../assets/property.svg";
import phone from "../assets/phone.svg";
import Footer from "../components/footer.jsx";
import { DetailDescription } from "../components/detailDescription";
import filledStar from "../assets/filledStar.svg";
import { ReviewInfo } from "../components/reviewInfo";
import { ReviewTexts } from "../components/reviewTexts";
import Logo from "../assets/Logo.svg";
import { useState, useEffect } from "react";
import axios from "axios";

export const Detail = () => {
  const [data, setData] = useState([]);
  let split
  let split1
  split = (window.location.search);
  split1 = (split.split("?"))
  useEffect(() => {
    axios
      .get(`http://localhost:8000/detail/${split1[1]}`)
      .then((response) => setData(response?.data?.data));
      
  }, []);
  let image = data.image?.zurag0
  console.log(data)

  

  return (
    
    <div className="detailContainer">
    
      <Header />
     
      <div className="detailHeroDad">
        {
          data.image?.map((e)=>{
            console.log(e.zurag0);
            return (<>
             <div className="detailHero">
              <div
            className="heroPicMain"
            style={{
              backgroundImage: `url("${e.zurag0}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition:"center"
            }}
          >
            <div className="hostInfoDad">
              <div className="hostImg"></div>
              <div className="hostInfo">
                <div className="listedBy">Listed By:</div>
                <div className="hostName">Dandarbaatar</div>
                <div className="hostMoney">For: {data.price}</div>
              </div>
            </div>
          </div>


          <div className="detailHeroSon">
            <div className="detailHeroSon1">
              <div
                className="heroPic"
                style={{
                  backgroundImage: `url("${e.zurag1}")`,
                }}
              ></div>
              <div
                className="heroPic"
                style={{
                  backgroundImage: `url("${e.zurag2}")`,
                }}
              ></div>
            </div>
            <div className="detailHeroSon1">
              <div
                className="heroPic"
                style={{
                  backgroundImage: `url("${e.zurag3}")`,
                }}
              ></div>
              <div
                className="heroPic"
                style={{
                  backgroundImage: `url(${e.zurag4})`,
                }}
              >
                <div className="morePhotos">
                  <div className="plus">+2</div>
                  <div className="more">
                    More <div className="photos">Photos</div>
</div>
</div>
                  </div>
                </div>
                 </div>
        </div>
            </>)
          })
        }
       
      </div>
    
      <div className="detailDesc">
        <div className="descHeader">
          <div className="descHeaderLeft">
            <div className="descHeaderLeftSon">
              <div className="descHeaderLeftSonLeft">
                {" "}
                <div className="descHeaderLeftMain">
                  Well Furnished {data.Placetype}
                </div>
                <div className="descHeaderLeftLocation">
                  100 Smart Street, LA, USA
                </div>
              </div>
              <div className="descHeaderRight">
                <img src={love} alt="Heart" className="colorBlack" />
                {/* <img src={redHeart} alt="Heart" className="colorBlack" /> */}
                <img src={share} alt="Heart" className="colorBlack" />
              </div>
            </div>

            {/* {data.map((item) => {
              return (                      key={item?.id}
                number={item?.facilities} */}
            <div className="descBoxes">
              <Boxes number={data.bedrooms} text=" Bedrooms" imgSource={bedroom} />
              <Boxes  number={data.bathrooms} text=" Bathrooms" imgSource={bathroom} />
              <Boxes  number={data.parkings} text=" Cars/2 Bikes" imgSource={car} />
              <Boxes number={data.rooms} text=" Rooms" imgSource={pet} />
            </div>
            {/* //   );
            // })} */}

          </div>

          <div className="descBoxDad">
            <div className="descBox">
              <div className="descBoxPrice">$ 1000 - $ 2000</div>
              <div className="line"></div>
              <div className="descBoxPeriod">
                <div className="periodShort">Short Period: $ 1000</div>
                <div className="periodMedium">Medium Period: $ 2000</div>
                <div className="periodLong">Long Period: $ 2000</div>
              </div>
              <button className="descBoxReserve">Reserve Now</button>
              <div className="descBoxFooter">
                <div className="descBoxProperty">
                  <img src={property} alt="" />
                  <div className="descBoxPropertyText">Property Inquiry</div>
                </div>
                <div className="descBoxProperty">
                  <img src={phone} alt="" />
                  <div className="descBoxPropertyText">Contact Host</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DetailDescription
          mainClass="detailDescription"
          headerClass="detailDescHeader"
          header= {data.Placetype} 
          textClass="detailDescText"
          text={data.description}
        />
        <DetailDescription
          mainClass="detailDescription"
          headerClass="detailDescHeader"
          header="Offered Amenities"
          amenities1="detailDescAmenities"
          buttonClass="amenitiesButton"
          button="Show All Amenities"
          television="television"
          wifi="wifi"
          washer="washer"
          balcony="balcony"
          cleaner="cleaner"
          radio="radio"
          lift="lift"
          airConditioner="airConditioner"
        />
        <DetailDescription
          mainClass="detailDescription"
          headerClass="detailDescHeader"
          header="Safety and Hygiene"
          amenities2="detailDescAmenities"
          cleaning = {data.daily }
          sanitizers = {data.sanitizers}
          smoke = {data.smoke}
        />
        <DetailDescription
          mainClass="detailDescriptionService"
          headerClass="detailDescHeader"
          header="Nearby Services"
          servicesBoxMain="serviceMain"
          serviceBoxes="serviceBoxes"
          buttonClass="showOnMap"
          button="Show On Map"
        />
      </div>
      <div className="detailReview">
        <div className="detailReviewSon">
          <div className="reviewHeader">
            Reviews{" "}
            <img
              src={filledStar}
              alt=""
              style={{ height: "23px", width: "23px" }}
            />{" "}
            5.0
          </div>
          <div className="revInfoDad">
            <div className="revInfoSon">
              <ReviewInfo
                textClass="revInfoText"
                revLineClass="revInfoLine5"
                number="5.0"
                text="Amenities"
              />
              <ReviewInfo
                textClass="revInfoText"
                revLineClass="revInfoLine5"
                number="5.0"
                text="Communication"
              />
              <ReviewInfo
                textClass="revInfoText"
                revLineClass="revInfoLine5"
                number="5.0"
                text="Value for Money"
              />
            </div>
            <div className="revInfoSon">
              <ReviewInfo
                textClass="revInfoText"
                revLineClass="revInfoLine5"
                number="5.0"
                text="Hygiene"
              />
              <ReviewInfo
                textClass="revInfoText"
                revLineClass="revInfoLine5"
                number="5.0"
                text="Location of Property"
              />
            </div>
          </div>
          <div className="revTexts">
            <div className="revTextsSon">
              <ReviewTexts
                imgSrc={Logo}
                username="John Doberman"
                date="Mar 12 2023"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
              <ReviewTexts
                imgSrc={Logo}
                username="John Doberman"
                date="Mar 12 2023"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
            <div className="revTextsSon">
              <ReviewTexts
                imgSrc={Logo}
                username="John Doberman"
                date="Mar 12 2023"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
              <ReviewTexts
                imgSrc={Logo}
                username="John Doberman"
                date="Mar 12 2023"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
          </div>
          <button className="reviewButton">Show All Reviews</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

///    JIAHAN BOLHI HUVILBAR NI GSH HAHA ------>

{
  /* <div className="detailDescription">
          <div className="detailDescHeader">Apartment Description</div>
          <div className="detailDescText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div className="detailDescText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div> */
}
{
  /* <div className="detailDescription">
          <div className="detailDescHeader">Offered Amenities</div>
          <div className="detailDescAmenities">
            <div className="descAmenitiesMain">
              <div className="descAmenitiesMainLeft">
                <Amenities imgSrc={kitchen} text="Kitchen" />
                <Amenities imgSrc={tv} text="Television with Voo" />
              </div>
              <div className="descAmenitiesMainLeft">
                <Amenities imgSrc={snow} text="Air conditioner" />
                <Amenities imgSrc={wifi} text="Free Wireless Internet" />
              </div>
              <div className="descAmenitiesMainLeft">
                <Amenities imgSrc={washer} text="Washer" />
                <Amenities imgSrc={balcony} text="Balcony or Patio" />
              </div>
            </div>
            <div className="descAmenitiesMore"></div>
          </div>
        </div> */
}
{
  /* <div className="detailDescription">
          <div className="detailDescHeader">Safety and Hygiene</div>
          <div className="detailDescAmenities">
            <div className="descAmenitiesMain">
              <div className="descAmenitiesMainLeft">
                <Amenities imgSrc={check} text="Daily Cleaning" />
                <Amenities imgSrc={check} text="Fire Extinguisher" />
              </div>
              <div className="descAmenitiesMainLeft">
                <Amenities
                  imgSrc={check}
                  text="Disinfections and Sterilizations"
                />
                <Amenities imgSrc={check} text="Smoke Detectors" />
              </div>
            </div>
            <div className="descAmenitiesMore"></div>
          </div>
        </div> */
}
{
  /* <div className="detailDescription">
          <div className="detailDescHeader">Nearby Services</div>
          <ServicesBox
            header="Grill Restro & Bar"
            location="100 meters away"
            star1="displayFlex"
            star2="displayFlex"
            star3="displayFlex"
            // star4="displayFlex"
            // star5="displayFlex"
          />
          <ServicesBox
            header="Grill Restro & Bar"
            location="100 meters away"
            star1="displayFlex"
            star2="displayFlex"
            star3="displayFlex"
            // star4="displayFlex"
            // star5="displayFlex"
          />
          <ServicesBox
            header="Grill Restro & Bar"
            location="100 meters away"
            star1="displayFlex"
            star2="displayFlex"
            star3="displayFlex"
            // star4="displayFlex"
            // star5="displayFlex"
          />    
        </div> */
}
