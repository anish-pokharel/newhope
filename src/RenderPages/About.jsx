import React from "react";
import Wrapper from "../components/common/Wrapper";
import BoxSection from "../components/CommonRender/BoxSection";
import { AboutData } from "../dummydata/AboutData";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <Wrapper title="About " subtitle="About" />
      {AboutData.map((val) => {
        return (
          <div className="box">
            <BoxSection
              key={val.id}
              logo={val.logo}
              title={val.title}
              desc={val.desc}
            />
            {/* <BoxSection
              key={val.id}
              logo={val.logo}
              title={val.title}
              desc={val.desc}
            />
            <BoxSection
              key={val.id}
              logo={val.logo}
              title={val.title}
              desc={val.desc}
            />
            <BoxSection
              key={val.id}
              logo={val.logo}
              title={val.title}
              desc={val.desc}
            /> */}
          </div>
        );
      })}
    </>
  );
};

export default About;
