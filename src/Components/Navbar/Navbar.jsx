import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Arslan</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link spy={true} to="Navbar" activeClass="activeClass">
              <li>Home</li>
            </Link>
            <Link spy={true} to="Services">
              <li>Services</li>
            </Link>
            <Link spy={true} to="Experience">
              <li>Experience</li>
            </Link>
            <Link spy={true} to="Portfolio">
              <li>Portfolio</li>
            </Link>
            <Link spy={true} to="Testimonial">
              <li>Testimonial</li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
