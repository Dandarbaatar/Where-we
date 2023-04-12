/** @format */
import Like from "../assets/homeCardLike.svg";

export const SearchCard = ({
  name,
  location,
  number,
  rent,
  time,
  lister,
  price,
  liked,
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
          height: "28vw",
          backgroundColor: "#E0E2E6",
          borderTopLeftRadius: "1vw",
          borderTopRightRadius: "1vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "95%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            style={{
              border: "none",
              backgroundColor: "transparent",
              marginTop: "1.7vw",
            }}
          >
            <img style={{ width: "2.5vw" }} src={Like}></img>
          </button>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "2vw",
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
              alt=""
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
              <div style={{ fontSize: "1.5vw", fontWeight: "700" }}>
                {lister}
              </div>
              <div style={{ fontSize: "1.35vw" }}>For: {price}</div>
            </div>
          </div>
          <img
            alt=""
            src="slider indicators.svg"
            style={{ width: "10%", marginRight: "2vw" }}
          ></img>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "12vw",
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
