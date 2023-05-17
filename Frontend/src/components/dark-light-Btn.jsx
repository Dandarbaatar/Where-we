import { createContext, useContext, useState } from "react";
export const Darklighbttn = () => {
  const [theme, setTheme] = useState(true);
  const toggler = () => {
    if (theme) {
      setTheme(false);
    } else {
      setTheme(true);
    }
    localStorage.setItem("dl-bttn", theme);
  };
  localStorage.getItem("dl-bttn");
  return (
    <label class="switch">
      <input type="checkbox" />
      <span onClick={toggler} class="slider round"></span>
    </label>
  );
};
