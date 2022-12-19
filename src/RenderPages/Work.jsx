import React from "react";
import Wrapper from "../components/common/Wrapper";
import "../styles/Work.css";
const Work = () => {
  return (
    <>
      <section className="container main-work">
        <Wrapper title="Work" subtitle=" Work" />
        <div className="first-work">
          <h1 className="work-h">Work With Us</h1>
          <p className="work_para">
            We are always on the lookout for the best Disability Support Workers
            and Community Nurses. Our culture is all about creating a safe space
            for the whole team. Our values are respect, inclusion, and friendly
            support. If you think you’d be a great fit, we would love to hear
            from you.
          </p>
        </div>
        <div className="nextpara">
           <h1 className="work-head">Current Vacancies</h1>
           <p className="work-newp">There are no current vacancies. Please check again or register your interest below and we’ll be in touch when suitable positions become available.</p>
           <div className="facebookk"></div>
           <div className="instagramm"></div>
           <div className="linkedinn"></div>
           <div className="twitterr"></div>
        <div className="photooo">
        </div>
        </div>
               <div className="new-formm"></div>
      </section>
    </>
    );
};
export default Work;