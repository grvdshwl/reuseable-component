import React from "react";
import "./WeatherWidget.css";
const WeatherWidget = ({ weather }) => {
  return (
    <div className="weather-widget">
      <div className="weather-widget-box">
        <div className="weather-widget-box-data">
          {" "}
          <span> Temperature in {weather.location.name}</span>
          <h2> {weather.current.temp_c} C</h2>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
