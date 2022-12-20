import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <img src="./images/error.svg" alt="" />
      <NavLink to="/">
        <button className="btn">Go Back</button>
      </NavLink>
    </>
  );
};

export default Error;
