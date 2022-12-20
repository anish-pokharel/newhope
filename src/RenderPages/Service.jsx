import React from "react";
import Wrapper from "../components/common/Wrapper";
// import BoxSection from "../components/CommonRender/BoxSection";
import MainBox from "../components/CommonRender/MainBox";

const Service = () => {
  return (
    <>
      <>
        <Wrapper title=" Service" subtitle="Service" />
        <div className="container-box grid grid-four-column">
          <MainBox />
        </div>
      </>
    </>
  );
};

export default Service;
