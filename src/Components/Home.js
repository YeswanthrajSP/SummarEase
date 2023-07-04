import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Save Time, Stay Focused: Let Us Summarize Your Meetings!
          </h1>
          <p className="primary-text">
            Your ultimate text-to-summary wizard! Transform lengthy documents
            into concise, insightful summaries with ease. Empower your
            productivity, make informed decisions, and unlock the true potential
            of your texts with SummarEase.
          </p>
          <button className="secondary-button">
            Start Summarizing <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" style={{ borderRadius: "250px" }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
