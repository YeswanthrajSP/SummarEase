import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/MicrosoftTeams-image (3).png";

const Summarizer1 = () => {
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
        <h1 className="primary-heading">Audio Summarizer</h1>
        <p className="primary-text">
          Audio to text: Effortlessly transforms any audio file into concise and
          captivating summaries in a matter of minutes.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Try it</button>
        </div>
      </div>
    </div>
  );
};

export default Summarizer1;
