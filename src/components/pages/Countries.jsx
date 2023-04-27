import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import WeatherService from '../../API/WeatherService';
import { useLocations } from '../../hooks/useLocation';
import { useFetching } from '../../hooks/useFetching';
import Loader from '../UI/Loader/Loader';
import LocationFilter from '../LocationFilter';

const Countries = () => {
  const router = useNavigate();
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState({query: ''});
  const sortedCountries = useLocations(countries, filter.query);

  const [fetchCountry, isLoading, error] = useFetching( async () => {
    const response = await WeatherService.getCountries();
    setCountries(response.data.data.map(loc =>  loc.name));
  });

  useEffect(() => {
    fetchCountry();
  }, []);

  return (
    <div>
      {isLoading
        ? <div className='loader-container'><Loader/></div>
        : <div className='country-container'>
            <LocationFilter msg={'Enter the country name'} filter={filter} setFilter={setFilter}/>
            <div className='country-list'>
              {sortedCountries.map((country, id) => 
                <div 
                  key={id}
                  className='country'
                  onClick={() => router(`${ country }/city`)}
                >
                  {country}    
                </div>
              )}
            </div>
         </div>
      }
    </div>
  )
}


export default Countries;