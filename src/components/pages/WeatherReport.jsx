import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { useFetchingExt } from '../../hooks/useFetching';
import Loader from '../UI/Loader/Loader';
import Weather from '../Weather';
import { getWeatherByCity } from "../../API/weather.api";
import Error from '../UI/Error/Error';

const WeatherReport = () => {
    const params = useParams();
    const [weatherInfo, setWeatherInfo] = useState(null);

    const [fetchCityWeather, fetchState] = useFetchingExt(() => getWeatherByCity(params.cityName));

    useEffect(() => {
        fetchCityWeather()
            .then(response => setWeatherInfo(response.data)).catch((error) => console.log(error));
    }, []);

    return (
        <div className='weather-container'>
            <img src={require('../../assets/pics/cloud.png')} className='cloud cloud-size1' alt="" />
            <img src={require('../../assets/pics/cloud2.png')} className='cloud cloud-size2' alt="" />
            {fetchState.error && 
                <Error error={fetchState.error}/>
            }
            {fetchState.isLoading
                ? <Loader/>
                : <Weather weatherInfo={weatherInfo}/>
            }
        </div>
    )
}

export default WeatherReport; 
