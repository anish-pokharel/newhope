import React from "react";
import "./Wrapper.css";
const Wrapper = ({ title }) => {
  return (
    <>
      <div className="maincontainer">
        <div className="wrapper">
          <h1>{title}</h1>
          {/* <p>{subtitle}</p> */}
        </div>
      </div>
    </>
  );
};

export default Wrapper;
