# Weather App

## Overview
The Weather App is a simple web application built using **ReactJS** that allows users to check the current weather and a 3-day weather forecast for a selected city. The app uses **OpenWeatherMap API** to fetch the weather data and ensures a smooth user experience with data persistence using **localStorage**.

## Features
- **City Selection**: Choose from the following cities:
  - Ho Chi Minh
  - Singapore
  - Kuala Lumpur
  - Tokyo
  - Athens
- **Weather Data**: Displays the current weather including temperature and weather condition for the selected city.
- **3-Day Weather Forecast**: Displays the weather forecast for the next three days.
- **Persistent City Selection**: The selected city is saved in the browser’s local storage to persist even after a page refresh.
- **Cross-browser Compatibility**: The app works on all modern browsers, including Internet Explorer 8 and above.

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript, ReactJS
- **API**: OpenWeatherMap API (Version 2.5)
- **Additional Libraries**: None (Axios is not used, `fetch` with async/await is used instead)

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sumitsahani/WeatherApp.git
   cd WeatherApp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm start
   ```

4. Open the application in your browser at `http://localhost:3000`.

## File Structure
- **App.jsx**: Contains the main logic for fetching weather data and rendering UI.
- **Main.jsx**: The entry point of the React app.
- **App.css**: Styling for the app.

## API Integration
- **OpenWeatherMap API** is used to fetch weather data for the selected city.
  - Current weather:  
    `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric`
  - 3-day forecast:  
    `https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric`
  
You need to replace `{API_KEY}` with your own OpenWeatherMap API key. You can get it by signing up at [OpenWeatherMap](https://openweathermap.org/).

## Live Demo
You can view the live version of the app here:  
[Weather App - Live Demo](https://kronex-weatherapp.netlify.app/)

## GitHub Repository
- [GitHub Repository for Weather App](https://github.com/Sumitsahani/WeatherApp)
