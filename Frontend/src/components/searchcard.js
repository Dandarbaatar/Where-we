/** @format */

export const SearchCard = ({ name, location, number, rent, time }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "32vw",
        height: "33vw",
        flexDirection: "column",
      }}
    >
      <img
        alt=""
        style={{
          width: "100%",
          height: "70%",
          backgroundColor: "#E0E2E6",
          borderTopLeftRadius: "1vw",
          borderTopRightRadius: "1vw",
        }}
      ></img>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "30%",
          backgroundColor: "white",
          borderBottomLeftRadius: "1vw",
          borderBottomRightRadius: "1vw",
          paddingLeft: "1.5vw",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <div style={{ fontSize: "1.2vw", fontWeight: "700" }}>{name}</div>
          <div style={{ color: "#9A9A9A", fontSize: "0.8vw" }}>{location}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img alt="" src="bed.svg"></img>
            <div>{number.bed}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img alt="" src="bath.svg"></img>
            <div>{number.bath}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img alt="" src="car.svg"></img>
            <div>{number.car}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img alt="" src="pet.svg"></img>
            <div>{number.dog}</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>{rent}</div>
          <hr style={{ backgroundColor: "grey" }} />
          <div>{time}</div>
        </div>
      </div>
    </div>
  );
};
