import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { useFetching } from '../../hooks/useFetching';
import WeatherService from '../../API/WeatherService';
import Loader from '../UI/Loader/Loader';

function WeatherReport() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [icon, setIcon] = useState('');
  const params = useParams();

  const [fetchCityWeather, isLoading, error] = useFetching( async () => {
    const response = await WeatherService.getWeatherByCity(params.cityName);
    // if (response.status === '404') {
    //   return <div>weather of this city not found</div>
    // }
    setWeatherInfo(response.data);
    // setIcon(response.data.weather[0].icon)
    console.log(response);
    
  });

  useEffect(() => {
    fetchCityWeather();
  }, [])

  return (
    <div>
        {error && 
        <h1>Error: ${error}</h1>
        }
      {isLoading 
        ? <Loader/>
        :  <div>
            works
            {/* <img src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} alt="" /> */}
          </div>
      }
    </div>
  )
}

export default WeatherReport; 