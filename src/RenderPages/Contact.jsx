import React from "react";
import "../styles/Contact.css";
import Wrapper from "../components/common/Wrapper";

import { ContactData } from "../dummydata/ContactData";
import Contactus from "../components/common/Contactus/Contactus";

const Contact = () => {
  return (
    <>
      <div className="maincontainer1 contact">
        <Wrapper title="contact us" />
        <div className="contact-section">
          <h2>Ready To Learn More ?</h2>
          <p>
            Call us on 1300 424 442 to talk about your needs Or fill out the
            form below and our Care Advisors will be in touch soon.
          </p>
          <div className="box">
            {ContactData.map((val) => {
              return (
                <div className="flexSi" key={val.id}>
                  <div className="logoSi">
                    <i className={val.logo}></i>
                  </div>
                  <div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Contactus />
    </>
  );
};

export default Contact;
