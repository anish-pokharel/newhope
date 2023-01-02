import React from "react";
// import Title from "../common/Title";
import "./Trust.css";
import about from "../../../../public/images/about.jpg";
import { NavLink } from "react-router-dom";

const Trust = () => {
  return (
    <>
      <section>
        {/* <Title title="We're All About Trust" className="padding" /> */}
        <div className="flexMI height ">
          <div className="right image">
            <img src={about} alt="" className="missionimg" />
          </div>
          <div className="left text  ">
            <h1>Our Trust</h1>
            <div className="flexTr ">
              <p className="padding desc ">
                Hope Ability management has years of experience in disability
                services along with extensive experience in customer focused
                public and private sector. Our vision is to empower participants
                to take ownership of their life.
              </p>
              <NavLink to={"/about"}>
                <button className="Btn">About Hope Ability</button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trust;
