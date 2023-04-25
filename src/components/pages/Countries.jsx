import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

import WeatherService from '../../API/WeatherService';
import { useFetching } from '../../hooks/useFetching';

const Countries = () => {

  const router = useNavigate();
  const [countries, setCountries] = useState([]);

  const [fetchCountry, isLoading, error] = useFetching( async () => {
    const response = await WeatherService.getCountries();
    console.log(response.data);
    setCountries(response.data.data);
  });

  useEffect(() => {
    fetchCountry();
  }, []);

  return (
    <div className='country-conteiner'>
      {countries.map((country, id) => 
        <div 
          key={id}
          className='country'
          onClick={() => router(`/country/:${ country.name }/city`)}
        >
          {country.name}    
        </div>
      )}
    </div>
  )
}


export default Countries;