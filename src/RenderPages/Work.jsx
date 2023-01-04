import React from "react";
import Wrapper from "../components/common/Wrapper";
import WorkCommon from "../components/new/WorkCommon";
import "../styles/Work.css";
const Work = () => {
  return (
    <>
      <section className="container main-work">
        <Wrapper title="Work" />
        <WorkCommon />
      </section>
    </>
  );
};
export default Work;
