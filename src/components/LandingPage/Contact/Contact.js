import React from "react";
import sit from "../images/sit.png";
import "../../../css/Contact.css";

const Contact = () => {

  function copyNumber() {
    navigator.clipboard.writeText("9740250911");
  }
  function copyMail() {
    navigator.clipboard.writeText("floydmanuel011@gmail.com");
  }
  function copySite() {
    navigator.clipboard.writeText("floyd-m.web.app");
  }

  return (
    <div className="contact" id="contact">
      <div className="contact-contents">
        <div className="box">
          <h1>Phone</h1>
          <span>
            <p>+91 9740 250 911</p>
            <i className="fas fa-copy" onClick={() => copyNumber()}></i>
          </span>
        </div>
        <div className="box">
          <h1>Email</h1>
          <span>
            <p>floydmanuel011@gmail.com</p>
            <i className="fas fa-copy" onClick={() => copyMail()}></i>
          </span>
        </div>
        <div className="box">
          <h1>Portfolio</h1>
          <span>
            <p>floyd-m.web.app</p>
            <i className="fas fa-copy" onClick={() => copySite()}></i>
          </span>
        </div>
      </div>
      <div className="tools">
        <div className="head">
          <h1>Contact...</h1>
        </div>
        <div className="tools-box">
          <div className="icons">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
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

export default Contact;
