import React from "react";
import { ServiceData } from "../../dummydata/Servicedata";
import MainBox from "../CommonRender/MainBox";

const HomeService = () => {
  return (
    <>
      <h2 className="common-heading"> Our Services </h2>
      <div className="container-box grid grid-three-column">
        {ServiceData.map((val) => {
          return (
            <MainBox
              key={val.id}
              cover={val.cover}
              title={val.title}
              desc={val.desc}
            />
          );
        })}
      </div>
    </>
  );
};

export default HomeService;
