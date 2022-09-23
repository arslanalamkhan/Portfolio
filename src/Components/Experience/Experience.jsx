import React from "react";
import Popup from "../Popup/Popup";
import "./Experience.css";
import Vector from "../../img/Vector1.png";

const Experience = () => {
  return (
    <div className="experience" id="Experience">
      {/* <Popup trigger={true}>
        <img src={Vector} alt="" />
      </Popup> */}
      <div className="achievement">
        <div className="circle">1+</div>

        <span>years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">5+</div>
        <span>completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">5+</div>
        <span>companies</span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
