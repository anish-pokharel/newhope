import React from "react";
import "./Contactus.css";

const Contactus = () => {
  return (
    
    <div className="main_cont">
      <h1 className="h_cont">Want to Give any Advice?</h1>
      <p className="p_cont">Call us on 1300 424 442 to talk about your needs. Or fill out the form below and our Care Advisors will be in touch soon.</p>
      <div className="cont_form">
        <input type="text" id="fname" name="fname"/>Enter Your Name
        <input type="email" id="email" name="email"/>Enter Your Email
      </div>
  </div>
    
  );
};

export default Contactus;
