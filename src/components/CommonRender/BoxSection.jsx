import React from "react";

const BoxSection = ({ logo, title, desc }) => {
  return (
    <div className="flexSi">
      <div className="logoSi">
        <i className={logo}></i>
      </div>
      <div className="text">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default BoxSection;
