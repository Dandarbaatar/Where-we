import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import filter from "../assets/Filter.svg";
import { Filter } from "../components/filter";
import { useState, useEffect, useMemo } from "react";
import { SearchCard } from "../components/searchcard";
import { Header } from "../components/header";
import Map from "../assets/result-map.svg";
import "../css/filter.css";
import { DualRange } from "../components/dualrangeslider";
import axios from "axios";
import { Link } from "react-router-dom";
import { DualRange2 } from "../components/dualrangeslider2";

export const Search = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")));
  let checking;
  const [filt, setFilt] = useState("");
  const [search, setSearch] = useState([]);
  const [users, setUsers] = useState("");
  const [clas, setClas] = useState(0);
  const [name, setName] = useState([]);
  const [card, setCard] = useState([]);
  const Clas = () => {
    if (clas === 0) {
      setClas(1);
    } else {
      setClas(0);
    }
  };
  console.log(card);
  useEffect(() => {
    axios({ method: "GET", url: "http://localhost:8000/searchdetails" }).then(
      (res) => {
        setCard(res.data.result[0]);
        setUsers(res.data.result[1]);
      }
    );
    if ((items?.minval || items?.maxval) && items?.types) {
      setName([
        { fill: items?.types },
        { fill: `${items?.minval}$-${items?.maxval}$ ` },
      ]);
    } else if (items?.minval || items?.maxval) {
      setName([{ fill: `${items?.minval}-${items?.maxval} ` }]);
    } else if (items?.types) {
      setName([{ fill: items?.types }]);
    }
  }, []);
  checking = useMemo(() => {
    if ((items?.minval || items?.maxval) && items?.types) {
      return card
        ?.filter((e) => e.price >= items?.minval)
        .filter((e) => e.price <= items?.maxval)
        .filter((e) => e.Placetype === items?.types.toLowerCase());
    } else if (items?.minval || items?.maxval) {
      return card
        ?.filter((e) => e.price >= items?.minval)
        .filter((e) => e.price <= items?.maxval);
    } else if (items?.types) {
      return card?.filter((e) => e.Placetype === items?.types.toLowerCase());
    } else {
      return card;
    }
  }, [card, items]);
  const GetMore = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    if (bottom) {
      console.log("bottom");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", GetMore, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", GetMore);
    };
  }, []);
  return (
    <div>
      <Header />
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#35475F",
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
                  color: "#FFFFFF",
                }}
              >
                {checking?.length} Results
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
                      items={items}
                      setItems={setItems}
                    />
                  );
                })}
                <Button
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    border: "solid black 1px",
                    borderRadius: "10vw",
                    height: "3vw",
                    width: "7vw",
                    justifyContent: "space-evenly",
                    borderColor: "#9A9A9A",
                    backgroundColor: "#35475F",
                  }}
                  onClick={Clas}
                >
                  <img style={{ width: "1.1vw" }} alt="" src={filter}></img>
                  <div style={{ fontSize: "1vw", color: "#FFFFFF" }}>
                    Filters
                  </div>
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
                color: "white",
              }}
            >
              <div className="search_choise">
                <div style={{ fontSize: "1.5vw" }}>Price</div>
                <hr style={{ width: "90%", height: "0.1vw" }}></hr>
                <DualRange2 />
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
                    fontSize: "1vw",
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
                    fontSize: "1vw",
                    paddingLeft: "0.1vw",
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#35475F",
                minHeight: "100vh",
                width: "90vw",
                marginTop: "-1vw",
                zIndex: "6",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "95vw",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {checking?.map((el, key) => {
                  return (
                    <SearchCard
                      key={key}
                      users={users}
                      img={el.image}
                      userId={el.userId}
                      placetype={
                        el.Placetype.charAt(0).toUpperCase() +
                        el.Placetype.slice(1)
                      }
                      bathrooms={el.bathrooms}
                      bedrooms={el.bedrooms}
                      description={el.description}
                      parkings={el.parkings}
                      price={el.price}
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
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
