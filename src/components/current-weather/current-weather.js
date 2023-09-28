import React, { useState } from 'react';
import './current-weather.css';

const CurrentWeather = () => {
    // A small box containing the current weather information
    return (
        <div className="current-weather">
            <div className="top">
                <div>
                    <p className='city'>London</p>
                    <p className='weather-description'>Rainy</p>
                </div>
                <img className="weather-icon" alt="icon" src='icons/10d.png' />
            </div>
            <div className="bottom">
                <p className='temperature'>10°C</p>
                <div className="details">
                    <div className='parameter-row'>
                        <span className='parameter-label-details'>Details</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels like</span>
                        <span className='parameter-value'>10°C</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>80%</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>10 km/h</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>1000 hPa</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CurrentWeather;
