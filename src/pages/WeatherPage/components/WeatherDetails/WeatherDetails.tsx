import React from 'react'

import { WeatherProps } from './WeatherDetails.types'

import { getDate } from '../../../../utils/getDate';

const WeatherDetails: React.FC<WeatherProps> = ({ country, city, desc, sunrise, sunset, temp, tempMax, tempMin }) => {
    const sunriseConverted = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetConverted = new Date(sunset * 1000).toLocaleTimeString();
    const tempConverted = (temp - 273.15).toFixed(1);
    const tempMaxConverted = (tempMax - 273.15).toFixed(1);
    const tempMinConverted = (tempMin - 273.15).toFixed(1);

    return (
        <div className='weather-page__details'>
            <div className="weather-page__location">
                <i className="weather-page__icon-location fas fa-map-marker-alt"></i>
                <p className="weather-page__city">{city}, {country}</p>
            </div>
            <p className="weather-page__date">{getDate()}</p>
            <p className="weather-page__main-desc">{desc}</p>
            <p className="weather-page__main-temp">{tempConverted} &#176;C</p>
            <div className="weather-page__temp">
                <i className="weather-page__icon-temp-max fas fa-arrow-up"></i>
                <p className="weather-page__temp-max">{tempMaxConverted} &#176;C</p>
                <i className="weather-page__icon-temp-min fas fa-arrow-down"></i>
                <p className="weather-page__temp-min">{tempMinConverted} &#176;C</p>
            </div>
            <div className="weather-page__more-info">
                <p className="weather-page__sunrise">{`Sunrise: ${sunriseConverted}`}</p>
                <p className="weather-page__sunset">{`Sunset: ${sunsetConverted}`}</p>
            </div>
        </div>
    )
}

export default WeatherDetails;