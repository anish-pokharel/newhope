import React from "react";
import Wrapper from "../components/common/Wrapper";
import { AboutData, AboutDatas, AboutmainDatas } from "../dummydata/AboutData";
import MainBox from "../components/CommonRender/MainBox";
import "../styles/About.css";
import Wrapper3 from "../components/common/wrapper3";
import CommonDesc from "../components/common/CommonDesc";

const About = () => {
  return (
    <>
      <Wrapper title="About " />
      <div>
        {AboutmainDatas.map((data) => {
          return (
            <CommonDesc
              key={data.id}
              title={data.title}
              logo={data.logo}
              p={data.p}
            />
          );
        })}
      </div>
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
      <div>
        {AboutDatas.map((value) => {
          return (
            <Wrapper3
              key={value.id}
              cover={value.logo}
              title={value.title}
              desc={value.desc}
            />
          );
        })}
      </div>
    </>
  );
};

export default About;
