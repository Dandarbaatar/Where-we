/** @format */
import Ex from "../assets/x.svg";

export const Filter = ({ name, setName, all }) => {
  const Delete = () => {
    setName(all.filter((e) => e.fill !== name));
  };
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#E0E2E6",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: "5vw",
        paddingLeft: "1vw",
        height: "2.2vw",
      }}
    >
      <div style={{ fontSize: "0.8vw" }}>{name}</div>
      <button
        onClick={Delete}
        style={{
          backgroundColor: "transparent",
          border: "none",
          display: "flex",
          alignItems: "center",
          width: "2vw",
          height: "3vw",
          marginLeft: "0.3vw",
        }}
      >
        <img alt="" style={{ width: "0.6vw" }} src={Ex}></img>
      </button>
    </div>
  );
};
