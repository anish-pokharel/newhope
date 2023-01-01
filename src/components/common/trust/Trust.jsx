import React from "react";
import Title from "../common/Title";
import "./Trust.css";
import about from "../../../../public/images/about.jpg";

import about from "../../image/about.jpg";
const Trust = () => {
  return (
    <>
      <section>
        <Title title="We're All About Trust" className="padding" />
        <div className="flexTr height ">
          <div className="right image">
            <img src={about} alt="" className="aboutimg" />
          </div>
          <div className="left text top ">
            <div className="flexTr ">
              <p className="padding desc ">
                Hope Ability management has years of experience in disability
                services along with extensive experience in customer focused
                public and private sector. Our vision is to empower participants
                to take ownership of their life.
              </p>
              <button className="Btn">About Hope Ability</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trust;
