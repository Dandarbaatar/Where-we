import React, { useState } from "react";
import { createContext } from "react";
export const ThemeContext = createContext(null);
export const Darklighbttn = () => {
  const [theme, setTheme] = useState("dark");
  const handleToggle = () => {
    setTheme(!theme);
  };
  return (
    <ThemeContext.Provider>
      <button onClick={handleToggle} className={theme ? "light" : "dark"}>
        <div id="Btn"></div>
        <div id="Btn1"></div>
      </button>
    </ThemeContext.Provider>
  );
};
