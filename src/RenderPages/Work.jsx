import React from "react";
import Wrapper from "../components/common/Wrapper";
import "../styles/Work.css";
const Work = () => {
  return (
    <>
      <section className="container main-work">
        <Wrapper title="Work" subtitle=" Work" />
        <div className="text">
          <p>
            We are always on the lookout for the best Disability Support Workers
            and Community Nurses. Our culture is all about creating a safe space
            for the whole team. Our values are respect, inclusion, and friendly
            support. If you think you’d be a great fit, we would love to hear
            from you.
          </p>
        </div>
      </section>
    </>
  );
};
export default Work;
