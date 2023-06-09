import React,{useEffect, useState} from "react";
import "../css/addProduct.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddProductPage5(props) {
  let obj1 = {};
  let obj2 = {};
  let obj3 = {};
  let obj4 = {};
  let obj5 = {};
  let obj6 = {};
  props.data1.forEach((elem, i) => {
    obj1["Placetype"] = elem;
  });
  props.data2.forEach((elem, i) => {
    obj2[`key${i}`] = elem;
  });
  props.data3.forEach((elem, i) => {
    obj3[`${elem}`] = elem;
  });
  props.data4.forEach((elem, i) => {
    obj4[`${elem}`] = elem;
  });
  props.data5.forEach((elem, i) => {
    obj5[`description${i}`] = elem;
  });
  props.data6.forEach((elem, i) => {
    obj6[`zurag${i}`] = elem;
  });
    // console.log(dataFather)
console.log(props.data1)
  // console.log(FullData[0); 
  const userId = localStorage.getItem("id")
  let image = []
  image = obj6 ;
  const Placetype = (obj1.Placetype)
 
  // const villa =  (obj1.villa)
  // const ger = (obj1.ger)
  // const house = (obj1.house)
  const bedrooms = (obj2.key0);
  
  const bathrooms = (obj2.key1);
  const rooms = (obj2.key3);
  const parkings =(obj2.key2);
  const price = (obj5.description1)
  const description = (obj5.description0)
  const teleision = (obj3.teleision)
  const wifi = (obj3.wifi)
  const washer = (obj3.washer)
  const balcony = (obj3.balcony)
  const cleaner = (obj3.cleaner)
  console.log(cleaner)
  const radio = (obj3.radio)
  const lift = (obj3.lift)
  const aircondioner = (obj3.airCondioner)
  const sanitizers = (obj4.sanitizers)
  const fire = (obj4.fireThrower)
  const daily = (obj4.dailyCleaner)
  const smoke = (obj4.fireDetector)
  const postData = () => {
    axios
      .post(`http://localhost:8000/user/${userId}/detail`, {
        bedrooms:bedrooms,
        image:image,
        price:price,
        userId:userId,
        rooms:rooms,
        bathrooms:bathrooms,
        parkings:parkings,
        Placetype: Placetype,
        // villa: villa,
        // ger: ger,
        // house: house,
        description:description,
        teleision:teleision,
        wifi:wifi,
        washer:washer,
        balcony:balcony,
        cleaner:cleaner,
        radio:radio,
        lift:lift,
        aircondioner:aircondioner,
        sanitizers:sanitizers,
        fire:fire,
        daily:daily,
        smoke:smoke
      })
      .then((res) => toast(res?.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <ToastContainer />
      <div className="host_add_container">
        <div className="host_add_container_l">
          <div className="host_add_question">
            Information can be added in similar way.
          </div>
          <div className="host_add_checkbox_father">
            The other required information can be added in a similar
            presentation for listing the property fluently...
          </div>
          <div>
            <button onClick={postData} className="host_button_s3">Post My Property</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductPage5;
