import React from "react";
import "./MainBox.css";
import { NavLink } from "react-router-dom";

const MainBox = ({ id, cover, title, desc }) => {
  return (
    <>
      <section className="main_padding">
        <div className="card" key={id}>
          <figure>
            <img src={cover} alt={title} />
          </figure>
          <div className="card-data">
            <h3 className="mainboxhead">{title}</h3>
            <p>{desc}</p>
            <NavLink to="/service">
              <button className="btn">Read More</button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainBox;
