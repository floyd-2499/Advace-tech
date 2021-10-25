import React from "react";
import user from "./images/user.svg";
import "../../css/Sidebar.css";

const SideBar = (Props) => {
  const { WeatherData } = Props;

  return (
    <div className="sidebar-container">
      <a href="#top">
        <i className="fab fa-studiovinari"></i>
      </a>

      <div className="navs">
        <a href="#home">Home</a>
        <a href="#chats">Chat</a>
        <a href="#service">Services</a>
        <a href="">Contact</a>
      </div>

      <div className="user">
        <img src={user} alt="user-image" />

        <p>
          {WeatherData.name}, {WeatherData.sys.country}
        </p>
      </div>
    </div>
  );
};

export default SideBar;
