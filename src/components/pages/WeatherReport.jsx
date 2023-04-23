import React, { useState, useContext, useEffect } from 'react'
import { useFetching } from '../../hooks/useFetching';
import WeatherService from '../../API/WeatherService';
import { StateContext } from '../../context/state.context';


function WeatherReport() {

  
  const { selectedCity } = useContext(StateContext);

  const [weather, setWeather] = useState(null);

  const [fetchCityWeather, isLoading, error] = useFetching( async () => {
  const response = await WeatherService.getWeatherByCity(selectedCity);
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