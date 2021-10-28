import React from "react";
import sit from "../images/sit.png";
import "../../../css/Youtube.css";

const Youtube = () => {
  return (
    <div className="youtube" id="youtube">
      <div className="youtube-container">
        <div className="box">
          <div className="main-video"></div>
          <div className="list">
            <div className="video">
              <div className="video-box"></div>
              <p>Title -video title video title video title</p>
            </div>
            <div className="video">
              <div className="video-box"></div>
              <p>Title -video title video title video title</p>
            </div>
            <div className="video">
              <div className="video-box"></div>
              <p>Title -video title video title video title</p>
            </div>
            <div className="video">
              <div className="video-box"></div>
              <p>Title -video title video title video title</p>
            </div>
            <div className="video">
              <div className="video-box"></div>
              <p>Title -video title video title video title</p>
            </div>
          </div>
          <div className="search">
            <input type="text" placeholder="Search Here" />
            <i class="fas fa-search"></i>
          </div>
        </div>
      </div>
      <div className="tools">
        <div className="head">
          <h1>YouTube</h1>
        </div>

        <div className="tools-box">
          <div className="icons">
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

export default Youtube;
