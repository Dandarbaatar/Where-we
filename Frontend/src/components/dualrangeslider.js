import { useState, useRef } from "react";

export const DualRange = () => {
  const [minVal, setMinVal] = useState(1);
  const [maxVal, setMaxVal] = useState(50);
  const minValref = minVal;
  const maxValref = maxVal;
  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        className="search_slider"
        type="range"
        min={1}
        max={50}
        value={minVal}
        style={{ width: "10vw", position: "absolute", zIndex: "3" }}
        onChange={(e) => {
          const value = Math.min(Number(e.target.value), maxVal - 1);
          setMinVal(value);
        }}
      ></input>
      <input
        className="search_slider"
        type="range"
        min={1}
        max={50}
        value={maxVal}
        onChange={(e) => {
          const value = Math.max(Number(e.target.value), minVal + 1);
          setMaxVal(value);
        }}
        style={{ width: "10vw", position: "absolute", zIndex: "4" }}
      ></input>
      <div
        style={{
          position: "relative",
          width: "10vw",
          display: "flex",
          alignItems: "center",
          marginTop: "0.2vw",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "0.7vw",
            backgroundColor: "#ced4da",
            borderRadius: "2vw",
            position: "absolute",
            zIndex: "1",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "#9fe5e1",
            width: "100%",
            height: "0.7vw",
            zIndex: "2",
            borderRadius: "2vw",
          }}
        ></div>
        <div
          style={{
            marginRight: "10vw",
            marginTop: "2vw",
            position: "absolute",
          }}
        >
          {minVal}
        </div>
        <div
          style={{
            marginLeft: "10vw",
            marginTop: "2vw",
            position: "absolute",
          }}
        >
          {maxVal}
        </div>
      </div>
    </div>
  );
};
