import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

function Paragraph() {
  const contextObj = useContext(ThemeContext);

  return (
    <div>
      <p className={contextObj.theme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea
        blanditiis laboriosam excepturi, vitae, at suscipit, harum saepe tenetur
        possimus fugit praesentium. Reiciendis placeat, sapiente ex omnis
        perspiciatis voluptatum. Fugiat!
      </p>
    </div>
  );
}

export default Paragraph;
