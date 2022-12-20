import React from "react";
import Wrapper from "../components/common/Wrapper";
import { AboutData } from "../dummydata/AboutData";
import MainBox from "../components/CommonRender/MainBox";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <Wrapper title="About " subtitle="About" />
      <div className="container grid grid-four-column">
        {AboutData.map((val) => {
          return (
            <MainBox
              key={val.id}
              cover={val.logo}
              title={val.title}
              desc={val.desc}
            />
          );
        })}
      </div>
    </>
  );
};

export default About;
