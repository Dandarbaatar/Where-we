/** @format */

export const SearchCard = ({ name, location, number }) => {
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
          width: "100%",
          height: "30%",
          backgroundColor: "white",
          borderBottomLeftRadius: "1vw",
          borderBottomRightRadius: "1vw",
        }}
      >
        <div>{name}</div>
        <div>{location}</div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
