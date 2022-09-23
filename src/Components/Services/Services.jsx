import React from "react";
import "./Services.css";
import heartemoji from "../../img/heartemoji.png";
import humble from "../../img/humble.png";
import glasses from "../../img/glasses.png";
import Cards from "../Cards/Cards";
import Resume from "./Resume.pdf";

const Services = () => {
  return (
    <div className="services" id="Services">
      {/* Left Side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <spane>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          Sollicitudin tempor id eu nisl nunc mi. Nulla malesuada pellentesque
          elit eget.
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#C1F5FF" }}></div>
      </div>
      {/* Right Side */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Cards
            image={glasses}
            title="Front End"
            content1="HTML, CSS, JavaScript, React"
          />
        </div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Cards
            image={heartemoji}
            title="Design"
            content1="Figma, Sketch, Adobe XD, Canva"
          />
        </div>
        <div style={{ top: "19rem", left: "12rem" }}>
          <Cards
            image={humble}
            title="Back End"
            content1="NodeJs, Express, Frappe, MongoDB, mySQL"
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
