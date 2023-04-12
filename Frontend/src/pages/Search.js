/** @format */

import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import filter from "../assets/Vector.svg";
import { Filter } from "../components/filter";
import { useState } from "react";
import { SearchCard } from "../components/searchcard";
import { Header } from "../components/header";
import Map from "../assets/result-map.svg";
import "../css/filter.css";

export const Search = () => {
  const [clas, setClas] = useState(0);
  const Clas = () => {
    if (clas == 0) {
      setClas(1);
    } else {
      setClas(2);
      setTimeout(() => {
        setClas(0);
      }, 330);
    }
  };
  const [name, setName] = useState([
    { fill: "100 Smart Street" },
    { fill: "12 Mar 2021" },
    { fill: "Short Period" },
  ]);
  const [card, setCard] = useState([
    {
      lister: "John Doberman",
      price: "$ 1000 - $ 5000",
      name: "Well Furnished Apartment",
      location: "100 Smart Street, LA, USA",
      number: { bed: 3, bath: 1, car: 2, dog: 0 },
      rent: "Apartment on Rent",
      time: "For Long Period: 1 - 2 Years",
      liked: false,
    },
    {
      lister: "John Doberman",
      price: "$ 1000 - $ 5000",
      name: "Well Furnished Apartment",
      location: "100 Smart Street, LA, USA",
      number: { bed: 3, bath: 1, car: 2, dog: 0 },
      rent: "Apartment on Rent",
      time: "For Long Period: 1 - 2 Years",
      liked: false,
    },
    {
      lister: "John Doberman",
      price: "$ 1000 - $ 5000",
      name: "Well Furnished Apartment",
      location: "100 Smart Street, LA, USA",
      number: { bed: 3, bath: 1, car: 2, dog: 0 },
      rent: "Apartment on Rent",
      time: "For Long Period: 1 - 2 Years",
      liked: false,
    },
  ]);
  return (
    <div>
      <Header />
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#F5F5F5",
        }}
      >
        <div style={{ width: "90%", display: "flex", flexDirection: "row" }}>
          <div style={{ width: "50%" }}>
            <div>
              <div
                style={{
                  fontSize: "1.5vw",
                  fontWeight: "700",
                  marginBottom: "0.7vw",
                  marginTop: "1vw",
                }}
              >
                10 Results Found
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1vw",
                  alignItems: "center",
                }}
              >
                {name?.map((el, key) => {
                  return (
                    <Filter
                      key={key}
                      name={el.fill}
                      setName={setName}
                      all={name}
                    />
                  );
                })}
                <Button
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "white",
                    border: "solid black 1px",
                    borderRadius: "10vw",
                    height: "3.3vw",
                    width: "8.6vw",
                    justifyContent: "space-evenly",
                    borderColor: "#9A9A9A",
                  }}
                  onClick={Clas}
                >
                  <img style={{ width: "1.3vw" }} alt="" src={filter}></img>
                  <div style={{ color: "black", fontSize: "1.1vw" }}>
                    Filters
                  </div>
                </Button>
              </div>
            </div>
            <div
              className="search_anim"
              clas={clas}
              style={{ display: "flex", flexDirection: "row" }}
            >
              <div>
                {card.map((el) => {
                  return (
                    <SearchCard
                      name={el.name}
                      location={el.location}
                      number={el.number}
                      rent={el.rent}
                      time={el.time}
                      lister={el.lister}
                      price={el.price}
                      liked={el.liked}
                    />
                  );
                })}
              </div>
              <div
                style={{
                  width: "50%",
                  marginTop: "10vw",
                  marginLeft: "5vw",
                  marginTop: "3vw",
                }}
              >
                <img alt="" style={{ width: "50vw" }} src={Map}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
