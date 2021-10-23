import React from "react";
import user from "./images/user.svg";
import '../../css/Sidebar.css';

const SideBar = (Props) => {
  const { WeatherData } = Props;

  return (
    <div className="sidebar-container">
      <i className="fab fa-studiovinari"></i>

      <div className="navs">
        <a href="">Home</a>
        <a href="">Chat</a>
        <a href="">Services</a>
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
