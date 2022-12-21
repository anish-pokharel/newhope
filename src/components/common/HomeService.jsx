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
        <h1>
          Hello mr Anish Pokharel tya khana khani malai maya garni malai
          timlaliyehi rakhyera care garna man xa mero sanu babe lai i loves you
          mero muutu .um amammamamammamamma
        </h1>
        ;
      </div>
    </>
  );
};

{
  /* <ul>
        <li>hlooe</li>
        <li>misses</li>
        <li>hshshsha</li>
    </ul>
    <div>1</div>
    <div>2</div>
    <div>3</div> */
}

export default HomeService;
