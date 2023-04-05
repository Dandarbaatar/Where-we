/** @format */
import { Button } from "react-bootstrap";
import Ex from "../assets/Vector.svg";

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
      }}
    >
      <div>{name}</div>
      <Button
        style={{
          backgroundColor: "transparent",
          border: "none",
          display: "flex",
          alignItems: "center",
          width: "2.5vw",
          height: "100%",
        }}
      >
        <img src={Ex}></img>
      </Button>
    </div>
  );
};
