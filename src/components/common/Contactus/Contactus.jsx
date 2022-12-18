import React from "react";
import "./Contactus.css";

const Contactus = () => {
  return (
    
    <div className="main_cont">
      <div className="text_cont">
      <h1 className="h_cont">Want to Give any Advice?</h1>
        
      <p className="p_cont">Call us on 1300 424 442 to talk about your needs. Or fill out the form below and our Care Advisors will be in touch soon.</p>
      </div>
      <div className="cont_form">
      <input className="form_name" type="text" /*name="lname"*/ placeholder="Enter Your Name"/><br/>
      <input className="cont_email" type="email" name="email" placeholder="Enter Your Email"/><br/>
     <input className="cont_phone" type="tel" name="phone" placeholder="Enter Your Number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/><br/>
     <textarea className="textare" name="w3review" rows="4" cols="50" placeholder="Your Message"></textarea>
     <input className="cont_sub" type="submit" value="Submit"  />
      </div>
  </div>
  );
};
export default Contactus;
