import React from "react";
import "./MainBox.css";
import { NavLink } from "react-router-dom";

const MainBox = ({ id, cover, title, desc }) => {
  return (
    <>
      <div className="card" key={id}>
        <figure>
          <img src={cover} alt={title} />
        </figure>
        <div className="card-data">
          <h3>{title}</h3>
          <p>{desc}</p>
          <NavLink to="/service">
            <button className="btn">Read More</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MainBox;
