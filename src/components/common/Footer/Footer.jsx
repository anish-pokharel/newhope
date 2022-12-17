import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section id="foot">
        <div className="flexMI footer">
          <div className="describe">
            <h2>Hope Ability</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              doloribus, mollitia soluta ipsa doloremque et explicabo facilis
              eveniet tempora dolorum esse aliquam totam neque minus?
            </p>
          </div>
          <div className="linked">
            <div className="link1">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Our Service</li>
                <li>Registered</li>
                <li>Refferals</li>
              </ul>
            </div>
            <div className="link2">
              <ul>
                <li>Contact</li>
                <li>Work With US</li>
                <li>Documents</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="iconsdesc">
              <li>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin"></i>
              </li>
            </div>
          </div>
        </div>
        <div className="footerright">
          <p>© 2021. All rights reserved by ADK</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
