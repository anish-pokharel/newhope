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
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta,
          inventore minus odio consectetur minima voluptatem eveniet illum ipsam
          ratione voluptates ex qui sunt quisquam! Consequatur voluptatibus,
          reiciendis possimus accusamus dicta placeat quam, quae neque rem nulla
          totam ex suscipit inventore hic quo laboriosam expedita. Eum deleniti
          modi id accusantium totam?
        </p>
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
