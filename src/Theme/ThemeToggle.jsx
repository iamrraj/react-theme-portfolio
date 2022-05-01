//ThemeToggle.js
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div
      className="transition duration-500 ease-in-out rounded-full p-2"
      title="Toggle theme"
    >
      {theme === "dark" ? (
        <FaSun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-800 text-2xl cursor-pointer"
        />
      ) : (
        <FaMoon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="dark:text-gray-800 text-white  text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default Toggle;
