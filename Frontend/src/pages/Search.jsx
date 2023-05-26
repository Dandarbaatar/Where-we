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
import Footer from "../components/footer";

export const Search = () => {
  let items = JSON.parse(localStorage.getItem("items"));
  const [filt, setFilt] = useState("");
  const [search, setSearch] = useState(["price"]);
  const [users, setUsers] = useState("");
  const [clas, setClas] = useState(0);
  const [name, setName] = useState([
    { fill: items.types },
    { fill: items.guests },
    { fill: `${items.minval}-${items.maxval} ` },
  ]);
  console.log(items.minval);
  const [card, setCard] = useState([]);
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
        setCard(res.data.result[0]);
        setUsers(res.data.result[1]);
      }
    );
  }, []);
  const GetMore = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    if (bottom) {
      console.log("bottom");
    }
  };
  console.log(card);
  useEffect(() => {
    window.addEventListener("scroll", GetMore, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", GetMore);
    };
  }, []);
  return (
    <div
      style={{
        backgroundColor: "var(--dark-prim-500)",
      }}
    >
      <Header />
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "var(--dark-prim-500)",
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
                  color: "var(--white)",
                }}
              >
                Results
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
                    backgroundColor: "var(--dark-prim-500)",
                    color: "white",
                    border: "solid white 1px",
                    borderRadius: "10vw",
                    height: "3vw",
                    width: "7vw",
                    justifyContent: "space-evenly",
                  }}
                  onClick={Clas}
                >
                  <img style={{ width: "1.1vw" }} alt="" src={filter}></img>
                  <div style={{ color: "var(--white)", fontSize: "1vw" }}>
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
                {/* <DualRange /> */}
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
                minHeight: "100vh",
                width: "90vw",
                backgroundColor: "#F5F5F5",
                marginTop: "-1vw",
                display: "flex",
                flexDirection: "row",
                zIndex: "6",
                position: "relative",
              }}
            >
              <div>
                {card
                  ?.filter((e) => e.price >= items.minval)
                  .filter((e) => e.price <= items.maxval)
                  .filter((e) => e.placetype != items.types)
                  .map((el, key) => {
                    return (
                      <SearchCard
                        key={key}
                        users={users}
                        userId={el.userId}
                        placetype={el.apartment}
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
      <Footer />
    </div>
  );
};
