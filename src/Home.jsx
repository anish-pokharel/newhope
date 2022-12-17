import React from "react";
import "./styles/Home.css";
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
          <button className="home_btn" onClick={() => setShowMore(!showMore)}>Click Here to Get Started</button>

        </div>
      </div>
    </>
  );
};

export default Home;
