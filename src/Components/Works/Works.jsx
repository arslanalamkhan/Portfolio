import React from "react";
import "./Works.css";
import Facebook from "../../img/Facebook.png";
import Fiverr from "../../img/fiverr.png";
import Shopify from "../../img/Shopify.png";
import Upwork from "../../img/Upwork.png";
import Amazon from "../../img/amazon.png";

const Works = () => {
  return (
    <div className="works">
      {/* Left Side */}
      <div className="awesome">
        <span>Works for All these</span>
        <span>Brands & Clients</span>
        <spane>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          Sollicitudin tempor id eu nisl nunc mi. Nulla malesuada pellentesque
          elit eget.
          <br />
          Nulla malesuada pellentesque elit eget.
          <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </spane>
        <button className="button s-button">Hire Me</button>
        <div className="blur s-blur1" style={{ background: "#C1F5FF" }}></div>
      </div>
      {/* Right Side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Facebook} alt=""></img>
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt=""></img>
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt=""></img>
          </div>
          <div className="w-secCircle">
            <img src={Upwork} alt=""></img>
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt=""></img>
          </div>
        </div>
        {/* Background Circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
