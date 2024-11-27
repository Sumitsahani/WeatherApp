import "./App.css";
import React, { useState, useEffect } from "react";

const weatherAPIKey = "88e0860365d1a7a862f085d392f8194d";
const cities = ["Ho Chi Minh", "Singapore", "Kuala Lumpur", "Tokyo", "Athens"];

const App = () => {
  const savedCity = localStorage.getItem("city") || "Ho Chi Minh";
  const [city, setCity] = useState(savedCity);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    localStorage.setItem("city", city);
    getWeatherData(city);
  }, [city]);

  const getWeatherData = async (city) => {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPIKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherAPIKey}&units=metric`;

    const currentWeatherResponse = await fetch(currentWeatherUrl);
    const currentWeatherData = await currentWeatherResponse.json();
    setWeather(currentWeatherData);

    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();
    setForecast(forecastData.list.slice(0, 3));
  };

  return (
    <div className="app">
      <h1 className="app-title">Weather App</h1>
      <div className="city-selector">
        <label htmlFor="city-select">City:</label>
        <select
          id="city-select"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        >
          {cities.map((cityName) => (
            <option key={cityName} value={cityName}>
              {cityName}
            </option>
          ))}
        </select>
      </div>

      {weather && (
        <div className="weather-card">
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}

      {forecast.length > 0 && (
        <div className="forecast-container">
          <h3>3-Day Forecast</h3>
          <div className="forecast-cards">
            {forecast.map((day, index) => (
              <div key={index} className="forecast-card">
                <h4>Day {index + 1}</h4>
                <p>Temp: {day.main.temp}°C</p>
                <p>{day.weather[0].description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
