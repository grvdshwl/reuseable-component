import React from "react";
import DisplayComponent from "./DisplayComponent";

const wrapperStyles = {
  border: "1px solid black",

  display: "flex",
  justifyContent: "center",
  width: "200px",
  marginLeft: "auto",
  marginRight: "auto",
};

const Wrapper = () => {
  return (
    <div style={wrapperStyles}>
      <DisplayComponent />
    </div>
  );
};

export default Wrapper;
