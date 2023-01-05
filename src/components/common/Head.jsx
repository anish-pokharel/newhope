import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/images/mainlogo.png";

import "./Head.css";
const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <NavLink to={"/"}>
              <img className="main-logo" src={Logo} alt="" />
            </NavLink>
          </div>
          <div className="social">
            <i className="fab fa-facebook-f icon"></i>

            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
