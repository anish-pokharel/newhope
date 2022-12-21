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
        ;
        {/* <h1>
          Hello mr Anish Pokharel tya khana khani malai maya garni malai
          timlaliyehi rakhyera care garna man xa mero sanu babe lai i loves you
          mero muutu .um amammamamammamamma
        </h1> */}
        <p>
          met consectetur adipisicing elit. Soluta, inventore minus odio
          consectetur minima voluptatem eveniet illum ipsam ratione voluptates
          ex qui sunt quisquam! Consequatur vpossimus accusamus dicta placeat
          tfrxujhfgchkuhouigl,hjsuscipit inventore hic quo laboriosam expedita.
          Eum deleniti modi id accusantium totam?
        </p>
        ;
      </div>{" "}
      kjholhg uyikyguk uyofyuiy 6tuy67tiky
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
