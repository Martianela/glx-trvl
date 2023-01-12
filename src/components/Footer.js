import React from "react";
import "./FooterS.css";

import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaSearchLocation,
} from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <dev className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{
                color: "#ffffff",
                marginRight: "2rem",
              }}
            />{" "}
            <div>
              <p> 123 acne st </p> <p> hosten, Tx </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                style={{
                  color: "#ffffff",
                  marginRight: "2rem",
                }}
              />
              9661600016{" "}
            </h4>{" "}
          </div>{" "}
          <div className="email">
            <h4>
              {" "}
              <FaMailBulk
                style={{
                  color: "#ffffff",
                  marginRight: "2rem",
                }}
              />
              9661600016{" "}
            </h4>{" "}
          </div>{" "}
        </dev>{" "}
        <div className="right">
          <h4> about company </h4>{" "}
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry 's standard dummy text
            ever since the 1500 s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.It has survived not
            only five centuries,{" "}
          </p>{" "}
          <div className="social">
            <FaFacebook
              size={30}
              style={{
                color: "#ffffff",
                marginRight: "1rem",
              }}
            />{" "}
            <FaLinkedin
              size={30}
              style={{
                color: "#ffffff",
                marginRight: "1rem",
              }}
            />{" "}
            <FaTwitter
              size={30}
              style={{
                color: "#ffffff",
                marginRight: "1rem",
              }}
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Footer;
