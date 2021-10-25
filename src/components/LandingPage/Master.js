import React, { useState } from "react";

import WomanSitting from "./images/sit.png";
import "../../css/Master.css";

const Master = (Props) => {


  return (
    <div className="master-container" id="home">
      <div className="text-speech">
        <h1>Text to Speech</h1>
        <input type="text" placeholder="Enter Text ....." />
        <span>
          <button>Submit</button>
        </span>
      </div>

      <div className="tasks">
        <div className="tasks-container">
          {/* use grid */}
          <div className="box">
            <h1>Create Task</h1>
            <p>+</p>
          </div>
          <div className="box">
            <h1>Edit Q & A</h1>
            <p>+</p>
          </div>
          <div className="box">
            <h1>YouTube</h1>
            <p>+</p>
          </div>
        </div>

        <img src={WomanSitting} alt="Woman Sitting" />
      </div>
    </div>
  );
};

export default Master;
