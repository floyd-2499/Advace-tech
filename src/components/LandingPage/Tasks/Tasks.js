import React from "react";
import sit from "../images/sit.png";
import "../../../css/Tasks.css";

const Tasks = () => {
  return (
    <div className="tasks" id="tasks">
      <div className="tasks-inputs">
        <h1>Add Task...</h1>
        <input type="text" placeholder="Title..." />
        <input type="text" placeholder="Description..." />
        <button>Create Task</button>
      </div>

      <div className="tasks-contents">
        <div className="lists">
          <div className="box">
            <h1>Task Title1</h1>
            <span>-</span>
          </div>
          <div className="box">
            <h1>Task Title2</h1>
            <span>-</span>
          </div>
          <div className="box">
            <h1>Task Title3</h1>
            <span>-</span>
          </div>
          <div className="box">
            <h1>Task Title3</h1>
            <span>-</span>
          </div>
          <div className="box">
            <h1>Task Title3</h1>
            <span>-</span>
          </div>
          <div className="box">
            <h1>Task Title3</h1>
            <span>-</span>
          </div>
          <div className="box">
            <h1>Task Title3</h1>
            <span>-</span>
          </div>
          <div className="box">
            <h1>Task Title3</h1>
            <span>-</span>
          </div>
          <div className="box">
            <h1>Task Title3</h1>
            <span>-</span>
          </div>
          <div className="box">
            <h1>Task Title3</h1>
            <span>-</span>
          </div>
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

export default Tasks;
