/** @format */

export const SearchCard = ({
  name,
  location,
  number,
  rent,
  time,
  lister,
  price,
}) => {
  return (
    <div
      style={{
        display: "flex",
        width: "40vw",
        height: "42vw",
        flexDirection: "column",
        marginTop: "3vw",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "25vw",
          backgroundColor: "#E0E2E6",
          borderTopLeftRadius: "1vw",
          borderTopRightRadius: "1vw",
          paddingTop: "42%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "56%",
          }}
        >
          <img
            style={{
              width: "5.5vw",
              height: "5.5vw",
              borderRadius: "10vw",
              backgroundColor: "white",
            }}
          ></img>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ fontSize: "1vw" }}>Listed by:</div>
            <div style={{ fontSize: "1.5vw", fontWeight: "700" }}>{lister}</div>
            <div style={{ fontSize: "1.35vw" }}>For: {price}</div>
          </div>
        </div>
        <img
          src="slider indicators.svg"
          style={{ width: "10%", marginRight: "2vw" }}
        ></img>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "13vw",
          backgroundColor: "white",
          borderBottomLeftRadius: "1vw",
          borderBottomRightRadius: "1vw",
          paddingLeft: "1.5vw",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <div style={{ fontSize: "1.5vw", fontWeight: "700" }}>{name}</div>
          <div style={{ color: "#9A9A9A", fontSize: "1.1vw" }}>{location}</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "35%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", gap: "0.4vw" }}>
            <img style={{ width: "1.6vw" }} alt="" src="bed.svg"></img>
            <div style={{ fontSize: "1vw" }}>{number.bed}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "0.4vw" }}>
            <img style={{ width: "1.30vw" }} alt="" src="bath.svg"></img>
            <div style={{ fontSize: "1vw" }}>{number.bath}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "0.4vw" }}>
            <img style={{ width: "1.7vw" }} alt="" src="car.svg"></img>
            <div style={{ fontSize: "1vw" }}>{number.car}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "0.4vw" }}>
            <img style={{ width: "1.3vw" }} alt="" src="pet.svg"></img>
            <div style={{ fontSize: "1vw" }}>{number.dog}</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "60%",
            height: "3vw",
          }}
        >
          <div style={{ color: "#9A9A9A", fontSize: "1vw", fontWeight: "600" }}>
            {rent}
          </div>
          <hr
            style={{
              backgroundColor: "grey",
              width: "0.1vw",
              height: "1vw",
              border: "none",
            }}
          />
          <div style={{ color: "#9A9A9A", fontSize: "1vw", fontWeight: "600" }}>
            {time}
          </div>
        </div>
      </div>
    </div>
  );
};
