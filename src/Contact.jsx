import React from "react";
import "../src/styles/Contact.css";
import Wrapper from "./components/common/Wrapper";

const Contact = () => {
  return (
    <>
      <div className="maincontainer1 contact">
        <Wrapper title="contact us" subtitle="Contact" />
        <div className="contact-section">
          <h2>Ready To Learn More ?</h2>
          <p>
            Call us on 1300 424 442 to talk about your needs Or fill out the
            form below and our Care Advisors will be in touch soon.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
