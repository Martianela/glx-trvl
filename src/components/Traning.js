import React from "react";
import "./TraningS.css";

import Pod from "../assets/pod.jpg";
import Moon from "../assets/moon.jpg";
import { Link } from "react-router-dom";
const Traning = () => {
  return (
    <div className="traning">
      <div className="left">
        <h1>Traning</h1>
        <p>
          through traning is necessity when traveling to space we offer full
          traning including pre flight and post flight traningLorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
        </p>
        <Link to="./contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="top">
            <img src={Moon} className="img" alt="" />
          </div>
          <div className="bottom">
            <img src={Pod} className="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Traning;
