import React, {useEffect, useState} from 'react'
import WeatherService from '../../API/WeatherService';
import { useFetching } from '../../hooks/useFetching';
import { Link, useNavigate } from 'react-router-dom';


const Countries = () => {

  const [countries, setCountries] = useState([]);

  const router = useNavigate();


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
        <div 
            key={id}
            className='country'
            onClick={() => router(`/country/:${ country.country }/city`)}
        >
            {country.country}    
        </div>
      )}
    </div>
  )
}


export default Countries;