import { Header } from "../components/header";
import "../css/detail.css";
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
import { Amenities } from "../components/amenities";
import washer from "../assets/washer.svg";
import check from "../assets/check.svg";
import snow from "../assets/snow.svg";
import kitchen from "../assets/kitchen.svg";
import tv from "../assets/tv.svg";
import wifi from "../assets/wifi.svg";
import balcony from "../assets/balcony.svg";
import Footer from "../components/footer.jsx";

export const Detail = () => {
  return (
    <div className="detailContainer">
      <Header />

      <div className="detailHeroDad">
        <div className="detailHero">
          <div
            className="heroPicMain"
            style={{
              backgroundImage: `url(${sad})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="hostInfoDad">
              <div className="hostImg"></div>
              <div className="hostInfo">
                <div className="listedBy">Listed By:</div>
                <div className="hostName">Dandarbaatar</div>
                <div className="hostMoney">For: $1000-$5000</div>
              </div>
            </div>
          </div>
          <div className="detailHeroSon">
            <div className="detailHeroSon1">
              <div
                className="heroPic"
                style={{
                  backgroundImage: `url(${sad})`,
                }}
              ></div>
              <div
                className="heroPic"
                style={{
                  backgroundImage: `url(${sad})`,
                }}
              ></div>
            </div>
            <div className="detailHeroSon1">
              <div
                className="heroPic"
                style={{
                  backgroundImage: `url(${sad})`,
                }}
              ></div>
              <div
                className="heroPic"
                style={{
                  backgroundImage: `url(${sad})`,
                }}
              >
                <div className="morePhoto">More photos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="detailDesc">
        {/* <div className="descHeaderDad"> */}
        <div className="descHeader">
          <div className="descHeaderLeft">
            <div className="descHeaderLeftSon">
              <div className="descHeaderLeftSonLeft">
                {" "}
                <div className="descHeaderLeftMain">
                  Well Furnished Apartment
                </div>
                <div className="descHeaderLeftLocation">
                  100 Smart Street, LA, USA
                </div>
              </div>
              <div className="descHeaderRight">
                <img src={love} alt="Heart" className="colorBlack" />
                <img src={share} alt="Heart" className="colorBlack" />
              </div>
            </div>
            <div className="descBoxes">
              <Boxes text="3 Bedrooms" imgSource={bedroom} />
              <Boxes text="2 Bathrooms" imgSource={bathroom} />
              <Boxes text="3 Cars/2 Bikes" imgSource={car} />
              <Boxes text="0 Pets Allowed" imgSource={pet} />
            </div>
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
              <div className="descBoxReserve">Reserve Now</div>
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

        {/* </div> */}
        <div className="detailDescription">
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
        </div>
        <div className="detailDescription">
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
        </div>
        <div className="detailDescription">
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
        </div>
      </div>
      <Footer />
    </div>
  );
};
