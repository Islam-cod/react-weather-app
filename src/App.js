import './App.css';
import Search from './components/Search';
import CurrentWeather from './components/current-weather/current-weather';
import { useState } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL } from './components/api';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");

    const currentWeatherFetch =
      fetch(
        `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
        });
    const forecastFetch =
      fetch(
        `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
        });

    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async(response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();
      setCurrentWeather(weatherResponse);
      setForecast(forecastResponse);
    });
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather data={currentWeather} />
    </div>
  );
}

export default App;
