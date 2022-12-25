import React from "react";
import "./ServiceData.css";

const ServiceData = () => {
  return (
    <>
      <div class="ser-two">
        <h1 class="ser-he">Daily Personal Activities</h1>
        <div class="pho"></div>
        <button id="myButtn">Get Started</button>
        <p class="servpp">
          We help with and/or supervise personal daily life tasks to enable you
          to live as autonomously as possible. We provide individual support in
          a range of environments, including but not limited to, your own home.
          We’ll assist you with your daily life, whether you only need a little
          help getting your day started or more ongoing support. Our services
          are highly personalized to meet your unique requirements.
        </p>
        <div class="listt">
          <ul>
            <li>
              <strong>Getting Around:</strong>"Assisting you in moving around
              the house, such as transfers from bed or chair to wheelchair or
              toilet."
            </li>
            <li>
              <strong>Getting Dressed:</strong>"Assisting you in getting dressed
              and ready for the day each morning with hoist assistance (if
              required)."
            </li>
            <li>
              <strong>Bathroom Assistance:</strong>"Assisting you with your
              personal hygiene, such as showering, toileting, brushing your
              teeth or shaving."
            </li>
            <li>
              <strong>Medication Assistance:</strong>"Assisting you in taking
              the correct medication at the right time. Cooking assistance and
              meal preparation. Laundry and ironing."
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ServiceData;
