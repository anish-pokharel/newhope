import React from "react";
import Wrapper from "../components/common/Wrapper";
import "../styles/About.css";

const About = () => {
  return (
    <>
      {/* <Wrapper title="About " subtitle="About" /> */}
      <section className="container">
        <div className="about-section">
          <h1>Our values</h1>
          <div className="flexSc">
            <div className="aboutbox">
              <div className="img">
                <img src="" alt="" />
              </div>
              <div className="abouttext">
                <h2>Honesty</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                  incidunt quos temporibus.
                </p>
              </div>
            </div>
            <div className="aboutbox">
              <div className="img">
                <img src="" alt="" />
              </div>
              <div className="abouttext">
                <h2>Honesty</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                  incidunt quos temporibus.
                </p>
              </div>
            </div>
            <div className="aboutbox">
              <div className="img">
                <img src="" alt="" />
              </div>
              <div className="abouttext">
                <h2>Honesty</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                  incidunt quos temporibus.
                </p>
              </div>
            </div>
            <div className="aboutbox">
              <div className="img">
                <img src="" alt="" />
              </div>
              <div className="abouttext">
                <h2>Honesty</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                  incidunt quos temporibus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
