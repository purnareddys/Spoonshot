import React, { useState } from "react";
const ThemeContext = React.createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState("white");
  const toggleTheme = (value) => {
    if (value === true) {
      setTheme("dark");
    } else {
      setTheme("white");
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export { ThemeContextProvider, ThemeContext };
