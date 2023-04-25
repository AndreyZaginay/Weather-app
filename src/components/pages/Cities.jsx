import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import WeatherService from '../../API/WeatherService';
import { useFetching } from '../../hooks/useFetching';

function Cities() {
  const router = useNavigate();  
  const params = useParams();
  const [cities, setCities] = useState([]);

  const [fetchCountryCities, isLoading, error] = useFetching( async () => {
    const response = await WeatherService.getCountryCities(params.countryName.substring(1));
    setCities(response.data.data);
  });

  useEffect(() => {
    fetchCountryCities();
  }, [])

  return (
    <div className='city-conteiner'>
      {cities.map((city, id) => 
        <div
          className='city' 
          key={id}
        >
          {city}
        </div>
      )}
    </div>
  )
}

export default Cities;