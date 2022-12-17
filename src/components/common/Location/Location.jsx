import React from "react";
import "./Location.jsx";

const Location = () => {
  // const map =
  //     "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d439.4816831324744!2d83.9774736230236!3d28.211764304637295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1670090776022!5m2!1sen!2snp",
  //   //   width = "100%";
  //   // height = "40vh";
  //   style = "border: 0 ";
  // allowFullScreen = "";
  // loading = "lazy";
  // referrerPolicy = "no-referrer-when-downgrade";
  return (
    <>
      <section className="container1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d439.4816831324744!2d83.9774736230236!3d28.211764304637295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1670090776022!5m2!1sen!2snp"
          width="100%"
          height="100%"
          frameBorder="0"
          className="mapdesign"
        ></iframe>
      </section>
    </>
  );
};

export default Location;
