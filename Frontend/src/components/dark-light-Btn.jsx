import React, { useState } from "react";
import { createContext } from "react";
export const ThemeContext = createContext(null);
export const Darklighbttn = () => {
  const [theme, setTheme] = useState("light");
  const handleToggle = () => {
    setTheme(!theme);
  };
  return (
    <ThemeContext.Provider>
      <button onClick={handleToggle} className={theme ? "dark" : "light"}>
        <div id="Btn"></div>
        <div id="Btn1"></div>
      </button>
    </ThemeContext.Provider>
  );
};
