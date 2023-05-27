import "../css/detail.css";
import { Amenities } from "../components/amenities";
import washer from "../assets/washer.svg";
import snow from "../assets/snow.svg";
import kitchen from "../assets/kitchen.svg";
import tv from "../assets/tv.svg";
import wifi from "../assets/wifi.svg";
import balcony from "../assets/balcony.svg";
import check from "../assets/check.svg";
import { ServicesBox } from "../components/servicesBox";

export const DetailDescription = (props) => {
  return (
    // detailDescription ---->
    <div className={props.mainClass || "displayNone"}>
      {/* detailDescHeader ---> */}
      <div className={props.headerClass || "displayNone"}>{props.header}</div>
      {/* detailDescText ---> */}
      <div className={props.textClass || "displayNone"}>{props.text}</div>
      {/* detailDescAmenities ---> */}
      <div className={props.amenities1 || "displayNone"}>
        <div className="descAmenitiesMain">
          <div className="descAmenitiesMainLeft">
            <Amenities imgSrc={kitchen} text={props.lift} />
            <Amenities imgSrc={tv} text={props.television} />
          </div>
          <div className="descAmenitiesMainLeft">
            <Amenities imgSrc={snow} text={props.airConditioner} />
            <Amenities imgSrc={wifi} text={props.wifi} />
          </div>
          <div className="descAmenitiesMainLeft">
            <Amenities imgSrc={washer} text={props.washer}/>
            <Amenities imgSrc={balcony} text={props.balcony} />
          </div>
        </div>
        <div className="descAmenitiesMore"></div>
      </div>
      <div className={props.amenities2 || "displayNone"}>
        <div className="descAmenitiesMain">
          <div className="descAmenitiesMainLeft">
            <Amenities imgSrc={check} text={props.cleaning}/>
            <Amenities imgSrc={check} text={props.smoke} />
          </div>
          <div className="descAmenitiesMainLeft">
            <Amenities imgSrc={check} text="Disinfections and Sterilizations" />
            <Amenities imgSrc={check} text={props.sanitizers} />
          </div>
        </div>
      </div>

      <div className={props.serviceBoxes || "displayNone"}>
        <ServicesBox
          header="Grill Restro & Bar"
          location="100 meters away"
          star1="displayFlex"
          star2="displayFlex"
          star3="displayFlex"
          // star4="displayFlex"
          // star5="displayFlex"
          // serviceMain --->
          main={props.servicesBoxMain || "displayNone"}
        />
        <ServicesBox
          header="Grill Restro & Bar"
          location="100 meters away"
          star1="displayFlex"
          star2="displayFlex"
          star3="displayFlex"
          // star4="displayFlex"
          star5="displayFlex"
          // serviceMain --->
          main={props.servicesBoxMain || "displayNone"}
        />
        <ServicesBox
          header="Grill Restro & Bar"
          location="100 meters away"
          star1="displayFlex"
          star2="displayFlex"
          star3="displayFlex"
          // star4="displayFlex"
          star5="displayFlex"
          // serviceMain --->
          main={props.servicesBoxMain || "displayNone"}
        />
      </div>

      <button className={props.buttonClass || "displayNone"}>
        {props.button}
      </button>
    </div>
  );
};