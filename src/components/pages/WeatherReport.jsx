import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { useFetching, useFetchingApiService } from '../../hooks/useFetching';
// import WeatherService from '../../API/WeatherService';
import Loader from '../UI/Loader/Loader';
import Weather from '../Weather';
import { useServiceApi } from "../../hooks/useApiService";
import { WeatherService } from "../../API/weather.service";

function WeatherReport() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const params = useParams();

  // const [fetchCityWeather, isLoading, error] = useFetching( async () => {
  //   const response = await WeatherService.getWeatherByCity(params.cityName);
  //   setWeatherInfo(response.data);
  // });
  //
  // useEffect(() => {
  //   fetchCityWeather();
  // }, [])

  const [weatherService, abortController] = useServiceApi(WeatherService);
  const [fetching, isLoading, error] = useFetchingApiService(weatherService.getWeatherByCity);

  useEffect(() => {
    fetching(async (getWeatherByCity) => {
      const response = await getWeatherByCity(params.cityName);
      setWeatherInfo(response.data);
    });
  }, []);

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
