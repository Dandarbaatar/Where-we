import { useState, useRef, useCallback, useEffect } from "react";

export const DualRange = () => {
  const [minVal, setMinVal] = useState(1);
  const [maxVal, setMaxVal] = useState(50);
  let thousandmin = minVal * 100;
  let thousandmax = maxVal * 100;
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
        style={{ width: "14vw", position: "absolute", zIndex: "3" }}
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
        style={{ width: "14vw", position: "absolute", zIndex: "4" }}
      ></input>
      <div
        style={{
          position: "relative",
          width: "14vw",
          height: "1.2vw",
          display: "flex",
          alignItems: "center",
          marginTop: "0.2vw",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "1.2vw",
            backgroundColor: "#ced4da",
            borderRadius: "2vw",
            position: "absolute",
            zIndex: "1",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "#4E4FE4",
            width: "100%",
            height: "1.2vw",
            zIndex: "2",
            borderRadius: "2vw",
          }}
        ></div>
        <div
          style={{
            fontSize: "1vw",
            marginTop: "2.5vw",
            position: "absolute",
          }}
        >
          {thousandmin}$
        </div>
        <div
          style={{
            fontSize: "1vw",
            marginLeft: "12.5vw",
            marginTop: "2.5vw",
            position: "absolute",
          }}
        >
          {thousandmax}$
        </div>
      </div>
    </div>
  );
};
