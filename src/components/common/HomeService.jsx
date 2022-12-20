import React from "react";
import { ServiceData } from "../../dummydata/Servicedata";
import MainBox from "../CommonRender/MainBox";

const HomeService = () => {
  return (
    <>
      <h2 className="common-heading"> Our Services </h2>
      <div className="container grid grid-three-column">
        {ServiceData.map((val) => {
          return <MainBox />;
        })}
        {/* <MainBox /> */}
      </div>
    </>
  );
};

export default HomeService;
