/** @format */

import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import filter from "../assets/Vector.svg";
import { Filter } from "../components/filter";
import { useState } from "react";
import { SearchCard } from "../components/searchcard";

export const Search = () => {
  const [name, setName] = useState([
    { fill: "100 Smart Street" },
    { fill: "12 Mar 2021" },
    { fill: "Short Period" },
  ]);
  const [card, setCard] = useState([
    {
      name: "Well Furnished Apartment",
      location: "100 Smart Street, LA, USA",
      number: { bed: 3, bath: 1, car: 2, dog: 0 },
    },
  ]);
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#F5F5F5",
      }}
    >
      <div style={{ width: "90%" }}>
        <div>
          <div>10 Results Found</div>
          <div style={{ display: "flex", flexDirection: "row", gap: "1vw" }}>
            {name.map((el, key) => {
              return <Filter key={key} name={el.fill} />;
            })}
            <Button
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "white",
                border: "solid black 1px",
                borderRadius: "10vw",
              }}
            >
              <img alt="" src={filter}></img>
              <div style={{ color: "black" }}>Filters</div>
            </Button>
          </div>
        </div>
        <div>
          {card.map((el) => {
            return (
              <SearchCard
                name={el.name}
                location={el.location}
                number={el.number}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
