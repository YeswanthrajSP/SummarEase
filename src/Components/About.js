import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/MicrosoftTeams-image (11).png";

import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img
          src={AboutBackgroundImage}
          alt=""
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">Video Summarizer</h1>
        <p className="primary-text">
          Video to summary: Experience the power of efficiency and convenience
          with our video to summary tool. Never miss out on valuable information
          again and make the most of your time
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Try it</button>
        </div>
      </div>
    </div>
  );
};

export default About;
