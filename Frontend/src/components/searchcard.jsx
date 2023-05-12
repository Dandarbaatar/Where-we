/** @format */
import Like from "../assets/homeCardLike.svg";

export const SearchCard = ({
  users,
  userId,
  placetype,
  bathrooms,
  bedrooms,
  description,
  parkings,
}) => {
  let name;
  users?.forEach((e) => {
    if (e._id === userId) {
      name = e.username;
    }
  });
  return (
    <div
      style={{
        display: "flex",
        width: "36.5vw",
        height: "37vw",
        flexDirection: "column",
        marginTop: "3vw",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "26vw",
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
            <img alt="" style={{ width: "2.5vw" }}></img>
          </button>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "1.7vw",
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
              <div style={{ fontSize: "1.3vw", fontWeight: "700" }}>{name}</div>
              <div style={{ fontSize: "1.1vw" }}>For:</div>
            </div>
          </div>
          <button
            style={{
              height: "1vw",
              marginTop: "2.5vw",
              marginRight: "2vw",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <img
              style={{ width: "4vw" }}
              alt=""
              src="slider indicators.svg"
            ></img>
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "10vw",
          backgroundColor: "white",
          borderBottomLeftRadius: "1vw",
          borderBottomRightRadius: "1vw",
          paddingLeft: "1.5vw",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <div style={{ fontSize: "1.2vw", fontWeight: "700" }}>
            {description}
          </div>
          <div style={{ color: "#9A9A9A", fontSize: "0.9vw" }}>location</div>
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
            <img style={{ width: "1.3vw" }} alt="" src="bed.svg"></img>
            <div style={{ fontSize: "1vw" }}>{bedrooms}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "0.4vw" }}>
            <img style={{ width: "1.1vw" }} alt="" src="bath.svg"></img>
            <div style={{ fontSize: "1vw" }}>{bathrooms}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "0.4vw" }}>
            <img style={{ width: "1.5vw" }} alt="" src="car.svg"></img>
            <div style={{ fontSize: "1vw" }}>{parkings}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "0.4vw" }}>
            <img style={{ width: "1.2vw" }} alt="" src="pet.svg"></img>
            <div style={{ fontSize: "1vw" }}></div>
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
          <div
            style={{ color: "#9A9A9A", fontSize: "0.8vw", fontWeight: "600" }}
          ></div>
          <hr
            style={{
              backgroundColor: "grey",
              width: "0.1vw",
              height: "1vw",
              border: "none",
            }}
          />
          <div
            style={{ color: "#9A9A9A", fontSize: "0.8vw", fontWeight: "600" }}
          ></div>
        </div>
      </div>
    </div>
  );
};
