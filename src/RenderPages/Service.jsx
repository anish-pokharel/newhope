import React from "react";
import { NavLink } from "react-router-dom";
import Wrapper from "../components/common/Wrapper";
// import BoxSection from "../components/CommonRender/BoxSection";
import MainBox from "../components/CommonRender/MainBox";
import ServiceData from "../components/CommonRender/ServiceData";
import { ServiceBox } from "../dummydata/Servicedata";

const Service = () => {
  return (
    <>
      <>
        <Wrapper title=" Service" />
        {ServiceBox.map((val) => {
          return (
            <>
              <div className="ser-two" key={val.id}>
                <h1 className="ser-he">{val.title}</h1>
                <div className="pho">
                  <img src={val.cover} alt="" />
                </div>
                <NavLink to="/Contact">
                  <button id="myButtn">Get Started</button>
                </NavLink>
                <p className="servpp">{val.p}</p>

                {val.subTopic.map((details, index) => {
                  return (
                    <>
                      <div className="listt" key={index}>
                        <ol>
                          <li>
                            <strong>{details.subtitle1}</strong>
                            {/* <br /> */}
                            {details.subtitleinfo1}
                          </li>
                          <li>
                            <strong>{details.subtitle2}</strong>
                            {/* <br /> */}
                            {details.subtitleinfo2}
                          </li>
                          <li>
                            <strong>{details.subtitle3}</strong>
                            {/* <br /> */}
                            {details.subtitleinfo3}
                          </li>
                          <li>
                            <strong>{details.subtitle4}</strong>
                            {/* <br /> */}
                            {details.subtitleinfo4}
                          </li>
                          <li>
                            <strong>{details.subtitle5} </strong>
                            {/* <br /> */}
                            {details.subtitleinfo5}
                          </li>
                          <li>
                            <strong>{details.subtitle6}</strong>
                            {/* <br /> */}
                            {details.subtitleinfo6}
                          </li>
                        </ol>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
        {/*
        <ServiceData />
        <div className="container-box grid grid-four-column">
           <MainBox /> 
        </div>
          */}
      </>
    </>
  );
};

export default Service;
