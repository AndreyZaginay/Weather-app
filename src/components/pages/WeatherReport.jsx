import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { useFetching } from '../../hooks/useFetching';
import WeatherService from '../../API/WeatherService';
import Loader from '../UI/Loader/Loader';
import Weather from '../Weather';

function WeatherReport() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const params = useParams();

  const [fetchCityWeather, isLoading, error] = useFetching( async () => {
    const response = await WeatherService.getWeatherByCity(params.cityName);
    setWeatherInfo(response.data);
  });

  useEffect(() => {
    fetchCityWeather();
  }, [])

  return (
    <div className='weather-container'>
      {isLoading 
        ? <Loader/>
        :  <Weather weatherInfo={ weatherInfo }/>
      }
    </div>
  )
}

export default WeatherReport; 