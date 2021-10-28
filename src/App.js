import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// components
import Flash from "./components/FlashPage/Flash";
import LogoFlash from "./components/FlashPage/LogoFlash";
// pages - singlePage app
import Home from "./components/LandingPage/Home";
// CSS
import "./css/Main.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [flashLogo, setFlashLogo] = useState(false);
  const [data, setData] = useState({});

  function getWeather() {
    let api = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "e3fc1b2985fdd183ad5b4b670b8f2e2d";
    navigator.geolocation.getCurrentPosition(success, error);
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      let url =
        api +
        "?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&appid=" +
        apiKey +
        "&units=imperial";

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data);
        });
    }
    function error() {
      error = "Unable to retrieve your location";
      window.location.reload();
    }
  }

  useEffect(() => {
    getWeather();
    setTimeout(() => {
      setLoading(false);
      setFlashLogo(true);
      setTimeout(() => {
        setFlashLogo(false);
      }, 1000);
    }, 4000);
  }, []);

  return (
    <div>
      <BrowserRouter>
        {loading ? (
          <Flash />
        ) : (
          <div>{flashLogo ? <LogoFlash /> : <Home WeatherData={data} />}</div>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
