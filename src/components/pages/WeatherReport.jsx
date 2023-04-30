import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { useFetchingExt } from '../../hooks/useFetching';
import Loader from '../UI/Loader/Loader';
import Weather from '../Weather';
import { getWeatherByCity } from "../../API/weather.api";

const WeatherReport = () => {
    const params = useParams();
    const [weatherInfo, setWeatherInfo] = useState(null);

    const [fetchCityWeather, fetchState] = useFetchingExt(() => getWeatherByCity(params.cityName));

    useEffect(() => {
        fetchCityWeather()
            .then(response => setWeatherInfo(response.data));
    })

    return (
        <div className='weather-container'>
            {fetchState.isLoading
                ? <Loader/>
                : <Weather weatherInfo={weatherInfo}/>
            }
        </div>
    )
}

export default WeatherReport; 
