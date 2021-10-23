import React from "react";
import "../../css/Master.css";

const Master = (Props) => {
  const { WeatherData, currentTime } = Props;

  return (
    <div className="master-container">
      <div className="top">
        {/* few settings with Assistant */}
        <h1>Assistant</h1>
        <div className="d-t">
          <p>{currentTime.time}</p>
          <p>{currentTime.day}</p>
          <p>{currentTime.date}</p>
          <p>
            {WeatherData.main.temp}° F, {WeatherData.weather[0].main}
          </p>
        </div>
      </div>

      <div className="text-speech"></div>

      <div className="tasks">
        <div className="tasks-container">
          {/* use grid */}
          <div className="create-task"></div>
          <div className="Q-A"></div>
          <div className="Youtube"></div>
        </div>

        <img src="" alt="girl-sitting" />
      </div>

      <div className="warning">
        <h1>Battery Low !!! 27% is left....</h1>
      </div>
    </div>
  );
};

export default Master;
