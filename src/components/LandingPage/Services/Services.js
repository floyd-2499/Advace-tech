import React from "react";
import sit from "../images/sit.png";
import "../../../css/Services.css";

const Services = () => {
  return (
    <div className="services" id="service">
      <div className="services-contents">
        <div className="box">
          <h1>Voice Assistance</h1>
          <span>+</span>
        </div>
        <div className="box">
          <h1>Text to Speech</h1>
          <span>+</span>
        </div>
        <div className="box">
          <h1>Task List</h1>
          <span>+</span>
        </div>
        <div className="box">
          <h1>YouTube</h1>
          <span>+</span>
        </div>
        <p>-- Stay connected more service updates soon --</p>
      </div>
      <div className="tools">
        <div className="head">
          <h1>Services...</h1>
        </div>
        <div className="tools-box">
          <div className="icons">
            <i class="fas fa-trash"></i>
            <i className="fas fa-info-circle"></i>
          </div>
          <div className="gap"></div>
          <div className="image">
            <img src={sit} alt="boy with mobile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
