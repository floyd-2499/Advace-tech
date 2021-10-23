import React, { useEffect, useState } from "react";
import Master from "./Master";
import SideBar from "./SideBar";
import "../../css/Main.css";

const Main = (Props) => {
  const { WeatherData } = Props;
  const [currentTime, setCurrentTime] = useState({
    time: " ",
    day: " ",
    date: " ",
  });

  function getTime() {
    const time = new Date();
    const date =
      time.getFullYear() + "-" + time.getMonth() + "-" + time.getUTCDate();
    const cTime = time.toLocaleTimeString();
    const d = new Array();
    d[0] = "Sunday";
    d[1] = "Monday";
    d[2] = "Tuesday";
    d[3] = "Wednesday";
    d[4] = "Thursday";
    d[5] = "Friday";
    d[6] = "Saturday";
    let day = d[time.getDay()];

    setCurrentTime({
      time: cTime,
      day: day,
      date: date,
    });
  }
  useEffect(() => {
    setInterval(() => {
      getTime();
    }, 1000);
  }, []);

  return (
    <div className="main">
      <div className="sidebar">
        <SideBar WeatherData={WeatherData} />
      </div>
      <div className="master">
        <Master WeatherData={WeatherData} currentTime={currentTime} />
      </div>
    </div>
  );
};

export default Main;
