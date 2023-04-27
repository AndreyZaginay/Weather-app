import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import { useLocations } from '../../hooks/useLocation';
import { useFetching } from '../../hooks/useFetching';
import LocationFilter from '../LocationFilter';
import Loader from '../UI/Loader/Loader';
import WeatherService from '../../API/WeatherService';
import List from '../UI/List/List';

function Cities() {
  const params = useParams();
  const [cities, setCities] = useState([]);
  const [filter, setFilter] = useState({query: ''});
  const sortedCities = useLocations(cities, filter.query);

  const [fetchCountryCities, isLoading, error] = useFetching( async () => {
    const response = await WeatherService.getCountryCities(params.countryName);
    setCities(response.data.data);
  });

  useEffect(() => {
    fetchCountryCities();
    console.log(params);
  }, [])

  return (
    <div>
      {error && 
        <h1 style={{textAlign: 'center'}}>Error: ${error}</h1>
      }
      {isLoading
        ? <div className='loader-container'><Loader/></div>
        : <div className='container'>
            <LocationFilter msg={'Enter city name'} filter={filter} setFilter={setFilter}/>
            <List list={sortedCities} route={'/weather'}/>
         </div>
      }
    </div>
  )
}

export default Cities;