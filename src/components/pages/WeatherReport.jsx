import React, { useState, useContext, useEffect } from 'react'
import { useFetching } from '../../hooks/useFetching';
import WeatherService from '../../API/WeatherService';

function WeatherReport() {

  const [weather, setWeather] = useState(null);

  const [fetchCityWeather, isLoading, error] = useFetching( async () => {
  const response = await WeatherService.getWeatherByCity();
  console.log(response);

  });

  useEffect(() => {
    fetchCityWeather();
  }, [])

  return (
    <div>WeatherReport</div>
  )
}

export default WeatherReport