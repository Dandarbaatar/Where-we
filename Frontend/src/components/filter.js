/** @format */
import { Button } from "react-bootstrap";
import Ex from "../assets/x.svg";

export const Filter = ({ name }) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#E0E2E6",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: "5vw",
        paddingLeft: "1vw",
        height: "2.5vw",
      }}
    >
      <div style={{ fontSize: "0.9vw" }}>{name}</div>
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          display: "flex",
          alignItems: "center",
          width: "2.2vw",
          height: "3vw",
          marginLeft: "0.3vw",
        }}
      >
        <img style={{ width: "0.6vw" }} src={Ex}></img>
      </button>
    </div>
  );
};
