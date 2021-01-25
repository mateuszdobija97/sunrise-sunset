import React from 'react'
import { WeatherProps } from './WeatherDetails.types'

const WeatherDetails: React.FC<WeatherProps> = ({ country, city, desc, sunrise, sunset, temp, tempMax, tempMin }) => {
    const sunriseConverted = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetConverted = new Date(sunset * 1000).toLocaleTimeString();
    const tempConverted = (temp - 273.15).toFixed(1);
    const tempMaxConverted = (tempMax - 273.15).toFixed(1);
    const tempMinConverted = (tempMin - 273.15).toFixed(1);

    return (
        <div className='weather-page__details'>
            <p className="weather-page__item">{city}</p>
            <p className="weather-page__item">{`Wschód słońca: ${sunriseConverted}`}</p>
            <p className="weather-page__item">{`Zachód słońca: ${sunsetConverted}`}</p>
            <p className="weather-page__item">{tempConverted} <em>&#176;C</em></p>
            <p className="weather-page__item">{country}</p>
            <p className="weather-page__item">{desc}</p>
            <p className="weather-page__item">{tempMaxConverted} <em>&#176;C</em></p>
            <p className="weather-page__item">{tempMinConverted} <em>&#176;C</em></p>
        </div>
    )
}

export default WeatherDetails;