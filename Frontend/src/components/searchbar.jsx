
import { useEffect, useState } from "react";
// import "react-calendar/dist/Calendar.css";
// import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import { DualRange } from "./dualrangeslider";
import SearchButton from "../assets/SearchButton.svg";

export const SearchBar = ({ types }) => {
  const navigate = useNavigate();
  const [request, setRequest] = useState([]);
  // const Period = (e) => {
  //   period = e.target.value;
  // };
  const Location = (e) => {
    let value = e.target.value;
    setRequest({ ...request, [e.target.name]: value });
  };
  // const Guests = (e) => {
  //   guests = Number(e.target.value);
  // };
  useEffect(() => {
    setRequest({ ...request, types });
  }, [types]);
  const Searching = () => {
    localStorage.setItem("items", JSON.stringify(request));
    navigate("/search");
  };
  return (
    <div
      style={{
        width: "25vw",
        height: "4.5vw",
        backgroundColor: "white",
        borderRadius: "3vw",
        display: "flex",
        flexDirection: "row",
        marginLeft: "37vw",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "2vw",
        paddingRight: "0.8vw",
      }}
    >
      {/* <div>
        <div
          className="search_bartext"
          style={{ fontSize: "0.8vw", fontWeight: "600" }}
        >
          Location
        </div>
        <input
          placeholder="Which city do you prefer?"
          style={{
            fontSize: "0.8vw",
            border: "none",
            width: "10vw",
            height: "1.3vw",
            outline: "none",
          }}
          name="location"
          value={request.location}
          onChange={Location}
        ></input>
      </div> */}
      {/* <hr
        style={{
          backgroundColor: "grey",
          width: "0.08vw",
          height: "1.7vw",
          border: "none",
        }}
      /> */}
      <div style={{ paddingBottom: "1vw", marginLeft: "1vw" }}>
        <div
          className="search_bartext"
          style={{ fontSize: "1vw", fontWeight: "600" }}

        >
          Price Range
        </div>
        <DualRange request={request} setRequest={setRequest} />
        {/* <input
          placeholder="Add Dates"
          style={{
            fontSize: "0.8vw",
            border: "none",
            width: "5vw",
            height: "1.3vw",
            outline: "none",
          }}
          name="period"
          value={request.period}
          onChange={Location}
        ></input> */}
      </div>
      <hr
        style={{
          marginLeft: "2vw",
          backgroundColor: "grey",
          width: "0.08vw",
          height: "4vw",
          border: "none",
        }}
      />
      <button
        style={{
          width: "3.2vw",
          height: "3.2vw",
          borderRadius: "10vw",
          backgroundColor: "var(--dark-sec-500)",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={Searching}
        to="/search"
      >
        <img
          alt=""
          style={{ width: "1.2vw", height: "1.2vw" }}
          src={SearchButton}
        ></img>
      </button>
    </div>
  );
};
