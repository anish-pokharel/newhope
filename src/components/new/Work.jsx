import React from "react";

 const Work = () => {
    return (
    <>
  

        <div className="work-one">
            <h1 className="work-onee">Work With Us</h1>
            <p className="work-oneee">Home » Work With Us</p>
        </div>
        <div className="new-secc">
            <p className="new-seccc">We are always on the lookout for the best Disability Support Workers and Community Nurses. Our culture is all about creating a safe space for the whole team. Our values are respect, inclusion, and friendly support. If you think you'd be a great fit, we would love to hear from you.</p>
        </div>
        <div className="work-two">
            <h1 className="work-twoo">Current Vacancies</h1>
            <p className="work-twooo">There are no current vacancies. Please check again or register your interest below and we'll be in touch when suitable positions become available.</p>
            <div className="work-twoooo"></div>
        </div>
        <div className="work-three">
            <form className="formm">
                <h1 className="work-form">Join The Hopeability Team</h1>
                <p className="work-formm">Please register your interest below and we'll be in touch soon.</p>
                <p className="workfp">"*" indicates required fields</p>
                <label className="fnamee" for="fname" > Name*</label>
                <input type="text" id="fname" name="name"/><br/>
                <label className="femaill" for="email">Enter your Email*</label>
               <input type="email" id="emaiil" name="email"/><br/>
               <label className="fphonee" for="phone">Phone*</label>
               <input type="tel" id="phonee" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
               <label className="ffile" for="file">Upload CV*</label>
               <input type="file" id="myFile" name="filename"/><br/>
               <p className="maxx">Max. file size: 8 MB.</p>
               <label className="ftextt" for="text"> Tell Us About Your Experience:</label>
               <textarea rows="4" cols="50" name="comment" form="usrform" id="textare"></textarea>
               <input className="submitt" type="submit" value="Submit"/>
            </form>
        </div>
   
    <>
  );
};
export default Work ;
