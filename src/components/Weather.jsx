import React, {useEffect, useState} from 'react'
import WeatherService from '../API/WeatherService';
import { useFetching } from '../hooks/useFetching';

export const Weather = () => {

  const [countries, setCountries] = useState([]);


  const [fetchWeatherByCountry, isLoading, error] = useFetching( async () => {
    const response = await WeatherService.getCountries();
    console.log(response.data);
    setCountries(response.data.data);
  });

  useEffect(() => {
    fetchWeatherByCountry();
  }, []);

  return (
    <div className='country-conteiner'>
      {countries.map((country, id) => 
        <div className='country' key={id}>{country.country}</div>
      )}
    </div>
  )
}
