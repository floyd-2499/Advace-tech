import React, { useEffect, useState } from "react";
import Master from "./Master";
import SideBar from "./SideBar";
import "../../css/Main.css";
import Chats from "./Chat/Chat";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";
import Tasks from "./Tasks/Tasks";
import Youtube from "./Youtube/Youtube";

const Main = (Props) => {
  const { WeatherData } = Props;

  const [currentTime, setCurrentTime] = useState({
    time: "00:00:00 AM",
    day: "sunday",
    date: "2021-00-00 ",
  });
  const [batteryLevel, setBatteryLevel] = useState(0);

  function getBattery() {
    navigator.getBattery().then(function (battery) {
      const level = battery.level;
      const status = level * 100;
      setBatteryLevel(status);
    });
  }
  console.log(batteryLevel);

  getBattery();

  function getTime() {
    const time = new Date();

    const m = new Array();
    m[0] = "January";
    m[1] = "February";
    m[2] = "March";
    m[3] = "April";
    m[4] = "May";
    m[5] = "June";
    m[6] = "July";
    m[7] = "August";
    m[8] = "September";
    m[9] = "October";
    m[10] = "November";
    m[11] = "December";
    let month = m[time.getUTCMonth()];

    const date = time.getFullYear() + "-" + month + "-" + time.getUTCDate();
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
        <div className="top" id="top">
          {/* few settings with Assistant */}
          <h1>Assistant</h1>
          <div className="d-t">
            <p>{currentTime.time}</p>
            <p>{currentTime.day}</p>
            <p>{currentTime.date}</p>
            {WeatherData && (
              <p>
                {WeatherData.main.temp}° F, {WeatherData.weather[0].main}
              </p>
            )}
          </div>
        </div>

        {/* conditions for sidebar navs */}
        <Master WeatherData={WeatherData} currentTime={currentTime} />

        <Chats />
        <Services />
        <Contact />
        <Tasks/>
        <Youtube />

        {batteryLevel <= 25 ? (
          <div className="warning">
            <p>
              Battery !!! {batteryLevel}% is left....{" "}
              <i className="fas fa-exclamation-triangle"></i>
            </p>
          </div>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default Main;
