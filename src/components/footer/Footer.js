import React from "react";
import "./Footer.css";
import designSvg from "../../assets/design.svg";
import { useState } from "react";

const Footer = () => {

  return (
    <div className="footer-div">
      <a
        href="https://github.com/Muhammet-Developer?tab=repositories.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <code className="brand">{"<Muhammed/> "}</code>
      </a>
      <img 
        src={designSvg}
        alt="design"
        style={{ width: "40px", margin: "0  25px 0 10px" }}
      />
    </div>
  );
};

export default Footer;
