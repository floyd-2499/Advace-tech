import React from "react";
import sit from "../images/sit.png";
import "../../../css/Chats.css";

const Chats = () => {
  return (
    <div className="chats" id="chats">
      <div className="mobile">
        <div className="mobile-container">
          {/* map here */}
          <div className="box">
            <div className="box-user">
              <p>04:05 PM</p>
              <span>User Transcript</span>
            </div>
            <div className="box-bot">
              <p>04:05 PM</p>
              <span>Bot Reply</span>
            </div>
          </div>

          <div className="box">
            <div className="box-user">
              <p>04:05 PM</p>
              <span>User Transcript</span>
            </div>
            <div className="box-bot">
              <p>04:05 PM</p>
              <span>Bot Reply</span>
            </div>
          </div>
        </div>
      </div>
      <div className="tools">
        <div className="head">
          <h1>Chats...</h1>
        </div>

        <div className="tools-box">
          <div className="icons">
            <i className="fas fa-cog"></i>
            <i className="fas fa-broom"></i>
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

export default Chats;
