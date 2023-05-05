/** @format */

import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import filter from "../assets/Filter.svg";
import { Filter } from "../components/filter";
import { useState, useEffect } from "react";
import { SearchCard } from "../components/searchcard";
import { Header } from "../components/header";
import Map from "../assets/result-map.svg";
import "../css/filter.css";
import { DualRange } from "../components/dualrangeslider";
import axios from "axios";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [clas, setClas] = useState(0);
  const Clas = () => {
    if (clas === 0) {
      setClas(1);
    } else {
      setClas(0);
    }
  };
  useEffect(() => {
    axios({ method: "GET", url: "http://localhost:8000/searchdetails" }).then(
      (res) => {
        setSearch(res);
      }
    );
  }, []);
  useEffect(() => {
    console.log(search);
  }, [search]);
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
                    height: "3vw",
                    width: "7vw",
                    justifyContent: "space-evenly",
                    borderColor: "#9A9A9A",
                  }}
                  onClick={Clas}
                >
                  <img style={{ width: "1.1vw" }} alt="" src={filter}></img>
                  <div style={{ color: "black", fontSize: "1vw" }}>Filters</div>
                </Button>
              </div>
            </div>
            <div
              className="search_transition"
              clas={clas}
              style={{
                width: "80vw",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                paddingTop: "2vw",
              }}
            >
              <div className="search_choise">
                <div style={{ fontSize: "1.5vw" }}>Location</div>
                <hr style={{ width: "90%", height: "0.1vw" }}></hr>
                <input
                  style={{
                    width: "90%",
                    height: "2vw",
                    borderRadius: "2vw",
                    border: "black solid 1px",
                    paddingLeft: "4%",
                  }}
                  placeholder="Search"
                ></input>
              </div>
              <div className="search_choise">
                <div style={{ fontSize: "1.5vw" }}>Rent Duration</div>
                <hr style={{ width: "90%", height: "0.1vw" }}></hr>
              </div>
              <div className="search_choise">
                <div style={{ fontSize: "1.5vw" }}>Price</div>
                <hr style={{ width: "90%", height: "0.1vw" }}></hr>
                <DualRange />
              </div>
              <div className="search_choise">
                <div style={{ fontSize: "1.5vw" }}>Rooms</div>
                <hr style={{ width: "90%", height: "0.1vw" }}></hr>
              </div>
              <div
                style={{
                  width: "10vw",
                  position: "absolute",
                  marginLeft: "68vw",
                  marginTop: "20vw",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <button
                  style={{
                    width: "3.5vw",
                    height: "2vw",
                    border: "none",
                    backgroundColor: "#0080EA",
                    borderRadius: "0.5vw",
                  }}
                >
                  Done
                </button>
                <button
                  style={{
                    width: "3.5vw",
                    height: "2vw",
                    border: "solid grey 1px",
                    backgroundColor: "#8E9799",
                    borderRadius: "0.5vw",
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#F5F5F5",
                marginTop: "-1vw",
                display: "flex",
                flexDirection: "row",
                zIndex: "6",
                position: "relative",
              }}
            >
              <div>
                {card.map((el, key) => {
                  return (
                    <SearchCard
                      key={key}
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
                  marginLeft: "14vw",
                  marginTop: "3vw",
                }}
              >
                <img alt="" style={{ width: "45vw" }} src={Map}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
