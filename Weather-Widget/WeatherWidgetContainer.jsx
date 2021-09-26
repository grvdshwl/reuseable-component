import React from "react";
import { useState, useEffect } from "react";
import WeatherWidget from "./WeatherWidget";
const WeatherWidgetContainer = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const fetchAPI = await fetch(
        "https://api.weatherapi.com/v1/current.json?key=3f820e3352934932a86143704210408&q=delhi"
      );
      const data = await fetchAPI.json();
      setWeather(data);
    };

    fetchWeather();
  }, []);

  return (
    weather && (
      <div>
        <WeatherWidget weather={weather} />
      </div>
    )
  );
};

export default WeatherWidgetContainer;
