import React from "react";
import { NavLink } from "react-router-dom";
import Contactus from "../components/common/Contactus/Contactus";
import HomeService from "../components/common/HomeService";
import Wrapper1 from "../components/common/wrapper/Wrapper1";
import "../styles/Home.css";
// import Nav from "./components/common/Nav";

const Home = () => {
  return (
    <>
      <div className="outer">
        <div className="left imgdiv">
          <img className="homeimage" src="new.jpeg" />
        </div>
        <div className="right homebox">
          <h1 className="homeheader">We Care With Respect</h1>
          <p className="homepara">
            Personalised Disability & Home Care Services.
          </p>
          <NavLink to="/Contact">
            <button className="home_btn">Click Here to Get Started</button>
          </NavLink>
        </div>
      </div>
      <HomeService />
      <Wrapper1 />
      <Contactus />
    </>
  );
};

export default Home;
