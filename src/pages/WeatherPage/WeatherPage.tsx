import React, { useCallback, useEffect, useState } from 'react'

import WeatherDetails from './components/WeatherDetails/WeatherDetails';

import { AsyncStatus } from '../../common/types/index';
import { getWeatherByGeographicCoordinates } from './api/WeatherPageApiService';

const WeatherPage = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [desc, setDesc] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [loadingStatus, setLoadingStatus] = useState<AsyncStatus>(AsyncStatus.Idle);
    const [longitude, setLongitude] = useState(0);
    const [sunrise, setSunrise] = useState(0);
    const [sunset, setSunset] = useState(0);
    const [temp, setTemp] = useState(0);
    const [tempMax, setTempMax] = useState(0);
    const [tempMin, setTempMin] = useState(0);
 
  
    const getLocation = useCallback(() => {
      setLoadingStatus(AsyncStatus.Loading);
      try {
        navigator.geolocation.getCurrentPosition(position => {
          setLatitude(Number(position.coords.latitude.toFixed(2)));
          setLongitude(Number(position.coords.longitude.toFixed(2)));
        })
      }
      catch {
        setLoadingStatus(AsyncStatus.Error)
      }
    }, []);

    const getWeatherDetails = useCallback(async () => {
        setLoadingStatus(AsyncStatus.Idle);
        try {
            const weatherDetails = await getWeatherByGeographicCoordinates(latitude, longitude);

            setCountry(weatherDetails.sys.country);
            setCity(weatherDetails.name);
            setDesc(weatherDetails.weather[0].description);
            setSunrise(weatherDetails.sys.sunrise);
            setSunset(weatherDetails.sys.sunset);
            setTemp(weatherDetails.main.temp);
            setTempMax(weatherDetails.main.temp_max);
            setTempMin(weatherDetails.main.temp_min);
        }   
        catch(error) {
            setLoadingStatus(AsyncStatus.Error);
        }
    }, [latitude, longitude])

    useEffect(() => {
        getLocation();
      }, [getLocation]);

    useEffect(() => {
        if(!latitude || !longitude) return;
        getWeatherDetails();
    }, [latitude, longitude, getWeatherDetails])

    const renderedWeatherDetails = loadingStatus === AsyncStatus.Error ? 
      ( <p>Upss! Coś poszło nie tak...</p> ) : 
      ( <WeatherDetails 
        city={city} sunset={sunset} sunrise={sunrise} temp={temp} country={country} tempMax={tempMax} tempMin={tempMin} desc={desc} 
      /> );

    return (
        <div className='weather-page app__weather-page'>
            {renderedWeatherDetails}
        </div>
    )
}

export default WeatherPage;