import { useState } from "react";

export const DualRange = () => {
  const [minVal, setMinVal] = useState(1);
  const [maxVal, setMaxVal] = useState(50);
  return (
    <div>
      <input
        type="range"
        min={1}
        max={50}
        value={minVal}
        style={{ width: "90%" }}
        onChange={(e) => {}}
      ></input>
      <input
        type="range"
        min={1}
        max={50}
        value={maxVal}
        style={{ width: "90%" }}
      ></input>
    </div>
  );
};
