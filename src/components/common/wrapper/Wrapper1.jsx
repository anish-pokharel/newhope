import React from "react";
import "./Wrapper1.css";

const Wrapper1 = () => {
  return (
    <>
      <div className="flexSB wrapper1 container">
        <div className="registered">
          <h3>We Are Registered NDIS Provider</h3>
          <button>Refer a participant</button>
        </div>
        <div className="advice">
          <h3>Looking For Advice?</h3>
          <p>
            Call us on 1300 424 442 to talk about your needs. Or fill out the
            form below and our Care Advisors will be in touch soon.
          </p>
        </div>
      </div>
    </>
  );
};

export default Wrapper1;
