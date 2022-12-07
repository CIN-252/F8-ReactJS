import React, { useContext } from "react";
import Content from "./Content";
import { ThemeContext } from "./ThemeProvider";

function Theme() {
  const contextObj = useContext(ThemeContext);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={contextObj.handleToggle}>Toggle theme</button>
      <Content />
    </div>
  );
}

export default Theme;
