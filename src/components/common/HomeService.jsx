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
        <p>
          met consectetur adipisicing elit. Soluta, inventore minus odio
          consectetgkjjjjjjj djgkh fhjdhgdjg ldjkgkjglum ipsam ratione
          voluptates ex qui sunt quisquam! Consequatur vpossimus accusam hgfj
          kghjfdhg dfdhgj houigl,hjsuscipit inventore hic quo laboriosam
          expedita. Eum d
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
