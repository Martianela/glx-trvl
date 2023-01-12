import React from "react";
import "./Vedios.css";
import { Link } from "react-router-dom";
import spaceVideo from "../assets/space.mp4";

const Video = () => {
  return (
    <div className="Hero">
      <video autoPlay loop muted id="video">
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Galaxy. Travel</h1>
        <p>World's first civilisation space Travel.</p>
        <div>
          <Link to="./traning" className="btn">
            traning
          </Link>
          <Link to="./contact" className="btn btn light">
            Launch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
