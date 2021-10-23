import React from "react";
import "../../css/Flash.css";
import man from "./images/man.png";
import woman from "./images/woman.png";

const Flash = () => {
  return (
    <div className="flash-page">
      <div className="container">
        <div className="left">
          <i className="fab fa-studiovinari"></i>
          <div className="text">
            <h1>Connecting</h1>
            <h1>People</h1>
          </div>
          <img src={man} alt="man" />
        </div>
        <div className="right">
          <div className="text">
            <p>Powered By</p>
            <h1>Assistant</h1>
          </div>
          <img src={woman} alt="woman" />
        </div>
      </div>

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div className="media-icons">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
      </div>
    </div>
  );
};

export default Flash;
