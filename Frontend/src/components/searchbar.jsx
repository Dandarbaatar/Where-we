import { Button } from "react-bootstrap";
import SearchButton from "../assets/SearchButton.svg";

export const SearchBar = () => {
  return (
    <div
      style={{
        width: "50vw",
        height: "4vw",
        backgroundColor: "white",
        borderRadius: "3vw",
        display: "flex",
        flexDirection: "row",
        marginLeft: "25vw",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "1.5vw",
        paddingRight: "0.8vw",
      }}
    >
      <div>
        <div style={{ fontSize: "0.8vw", fontWeight: "600" }}>Location</div>
        <input
          placeholder="Which city do you prefer?"
          style={{
            fontSize: "0.8vw",
            border: "none",
            width: "10vw",
            height: "1.3vw",
            outline: "none",
          }}
        ></input>
      </div>
      <hr
        style={{
          backgroundColor: "grey",
          width: "0.08vw",
          height: "1.7vw",
          border: "none",
        }}
      />
      <div>
        <div style={{ fontSize: "0.8vw", fontWeight: "600" }}>Check In</div>
        <input
          placeholder="Add Dates"
          style={{
            fontSize: "0.8vw",
            border: "none",
            width: "5vw",
            height: "1.3vw",
            outline: "none",
          }}
        ></input>
      </div>
      <hr
        style={{
          backgroundColor: "grey",
          width: "0.08vw",
          height: "1.7vw",
          border: "none",
        }}
      />
      <div>
        <div style={{ fontSize: "0.8vw", fontWeight: "600" }}>Check Out</div>
        <input
          placeholder="Add Dates"
          style={{
            fontSize: "0.8vw",
            border: "none",
            width: "5vw",
            height: "1.3vw",
            outline: "none",
          }}
        ></input>
      </div>
      <hr
        style={{
          backgroundColor: "grey",
          width: "0.08vw",
          height: "1.7vw",
          border: "none",
        }}
      />
      <div>
        <div style={{ fontSize: "0.8vw", fontWeight: "600" }}>Guests</div>
        <input
          placeholder="Add Guests"
          style={{
            fontSize: "0.8vw",
            border: "none",
            width: "5vw",
            height: "1.3vw",
            outline: "none",
          }}
        ></input>
      </div>
      <Button
        style={{
          width: "3.2vw",
          height: "3.2vw",
          borderRadius: "10vw",
          backgroundColor: "#484848",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          alt=""
          style={{ width: "1.2vw", height: "1.2vw" }}
          src={SearchButton}
        ></img>
      </Button>
    </div>
  );
};
