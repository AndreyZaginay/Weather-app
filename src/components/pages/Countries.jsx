import React, {useEffect, useState} from 'react';

import WeatherService from '../../API/WeatherService';
import { useLocations } from '../../hooks/useLocation';
import { useFetching } from '../../hooks/useFetching';
import Loader from '../UI/Loader/Loader';
import LocationFilter from '../LocationFilter';
import List from '../UI/List/List';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState({query: ''});
  const sortedCountries = useLocations(countries, filter.query);
  const [fetchCountry, isLoading, error] = useFetching( async () => {
    const response = await WeatherService.getCountries();
    setCountries(response.data.data.map(location => location.name));
  });

  useEffect(() => {
    fetchCountry();
  }, []);

  return (
    <div>
      {isLoading
        ? <div className='loader-container'><Loader/></div>
        : <div className='container'>
            <LocationFilter msg={'Enter country name'} filter={filter} setFilter={setFilter}/>
            <List list={sortedCountries} route={'/city'}/>
         </div>
      }
    </div>
  )
}

export default Countries;