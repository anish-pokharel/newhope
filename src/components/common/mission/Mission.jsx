import React from "react";
import mission from "../../../../public/images/mission.webp";
import "./Mission.css";

const Mission = () => {
  return (
    <>
      <div className="flexMI height">
        <div className="right image">
          <img src={mission} alt="" className="missionimg" />
        </div>
        <div className="left text  lefts">
          <h1>Our mission</h1>
          <p className="padding desc ">
            Our Mission Our mission is to empower people with a disability to
            engage in opportunities of their choice in a supported and inclusive
            environment.
          </p>
        </div>
      </div>
    </>
  );
};

export default Mission;
