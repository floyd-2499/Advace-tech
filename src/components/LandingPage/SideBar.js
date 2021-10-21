import React from "react";
import user from "./images/user.svg";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <i class="fab fa-studiovinari"></i>

      <div className="navs">
        <Link>Home</Link>
        <Link>Chats</Link>
        <Link>Services</Link>
        <Link>Contact</Link>
      </div>

      <div className="user">
        <img src={user} alt="user-image" />

        <p>Karkala, In</p>
      </div>
    </div>
  );
};

export default SideBar;
