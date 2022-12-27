import React from "react";
import "./Wrapper3.css";

const Wrapper3 = ({ title, desc, cover }) => {
  return (
    <>
      <div className="work-two">
        <h1 className="work-twoo">{title}</h1>
        <p className="work-twooo">{desc}</p>
        <div className="work-twoooo">
          <img src={cover} alt="" />
        </div>
      </div>
    </>
  );
};

export default Wrapper3;
