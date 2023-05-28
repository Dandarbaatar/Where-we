import Like from "../assets/homeCardLike.svg";
import { Link } from "react-router-dom";

export const SearchCard = ({
  users,
  img,
  userId,
  placetype,
  bathrooms,
  bedrooms,
  description,
  parkings,
  price,
}) => {
  let name;
  let image = img[0].zurag0;
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
        marginRight: "9vw",
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
          backgroundColor: "#80858E",
        }}
      >
        <img
          style={{
            display: "flex",
            zIndex: "0",
            position: "absolute",
            width: "36.5vw",
            height: "26vw",
            borderTopRightRadius: "1vw",
            borderTopLeftRadius: "1vw",
          }}
          src={image}
        ></img>
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

            zIndex: "1",
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
              <div style={{ fontSize: "1vw", color: "#FFFFFF" }}>
                Listed by:
              </div>
              <div
                style={{
                  fontSize: "1.3vw",
                  fontWeight: "700",
                  color: "#FFFFFF",
                }}
              >
                {name}
              </div>
              <div style={{ fontSize: "1.1vw", color: "#FFFFFF" }}>
                For:{price}
              </div>
            </div>
            <div style={{ fontSize: "1vw" }}>Listed by:</div>
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
          height: "11vw",
          backgroundColor: "#565C68",
          borderBottomLeftRadius: "1vw",
          borderBottomRightRadius: "1vw",
          paddingLeft: "1.5vw",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "1.2vw",
              fontWeight: "700",
              color: "#FFFFFF",
            }}
          >
            {placetype}
          </div>
          <div
            style={{
              fontSize: "0.8vw",
              color: "#DDDDDD",
              height: "2.1vw",
              overflow: "hidden",
            }}
          >
            Description: {description}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "27%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "0.4vw",
              }}
            >
              <img style={{ width: "1.3vw" }} alt="" src="bed.svg"></img>
              <div style={{ fontSize: "1vw", color: "#FFFFFF" }}>
                {bedrooms}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "0.4vw",
              }}
            >
              <img style={{ width: "1.1vw" }} alt="" src="bath.svg"></img>
              <div style={{ fontSize: "1vw", color: "#FFFFFF" }}>
                {bathrooms}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "0.4vw",
              }}
            >
              <img style={{ width: "1.5vw" }} alt="" src="car.svg"></img>
              <div style={{ fontSize: "1vw", color: "#FFFFFF" }}>
                {parkings}
              </div>
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
              style={{
                color: "#DDDDDD",
                fontSize: "1vw",
                fontWeight: "600",
              }}
            >
              {placetype} on Rent
            </div>
            {/* <hr
            style={{ color: "#9A9A9A", fontSize: "0.8vw", fontWeight: "600" }}
          ></div>
          <hr
            style={{
              backgroundColor: "grey",
              width: "0.1vw",
              height: "1vw",
              border: "none",
            }}
          /> */}
            <div
              style={{
                color: "#9A9A9A",
                fontSize: "0.8vw",
                fontWeight: "600",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
