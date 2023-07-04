import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/MicrosoftTeams-imagee.png";

const Summarizer = () => {
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
          Text to summary: Transform lengthy documents into concise, insightful
          summaries with ease. Empower your productivity, make informed
          decisions, and unlock the true potential of your texts.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Try it</button>
        </div>
      </div>
    </div>
  );
};

export default Summarizer;
