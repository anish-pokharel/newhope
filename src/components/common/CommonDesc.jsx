import React from "react";
import { NavLink } from "react-router-dom";

const CommonDesc = ({ title, logo, p }) => {
  return (
    <>
      <div className="ser-two">
        <h1 className="ser-he">{title}</h1>
        <div className="pho">
          <img src={logo} alt="" />
        </div>
        <NavLink to="/Contact">
          <button id="myButtn">Get Started</button>
        </NavLink>
        <p className="servpp">{p}</p>
      </div>
    </>
  );
};

export default CommonDesc;
