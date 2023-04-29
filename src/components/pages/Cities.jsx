import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import { useLocations } from '../../hooks/useLocation';
import { useFetching, useFetchingApiService } from '../../hooks/useFetching';
import LocationFilter from '../LocationFilter';
import Loader from '../UI/Loader/Loader';
import WeatherService from '../../API/WeatherService';
import List from '../UI/List/List';
import { useServiceApi } from "../../hooks/useApiService";
import { CountriesService } from "../../API/countires.service";

function Cities() {
  const params = useParams();
  const [cities, setCities] = useState([]);
  const [filter, setFilter] = useState({query: ''});
  const sortedCities = useLocations(cities, filter.query);

  // const [fetchCountryCities, isLoading, error] = useFetching( async () => {
  //   const response = await WeatherService.getCountryCities(params.countryName);
  //   setCities(response.data.data);
  // });
  //
  // useEffect(() => {
  //   fetchCountryCities();
  //   console.log(params);
  // }, [])

  const [countriesService, abortController] = useServiceApi(CountriesService)
  const [fetching, isLoading, error] = useFetchingApiService(countriesService.getCountryCities);

  useEffect(() => {
    fetching(async (getCountryCities) => {
      const response = await getCountryCities(params.countryName);
      setCities(response.data);
    });
  }, []);

  return (
    <div>
      {error && 
        <h1 style={{textAlign: 'center'}}>Error: ${error}</h1>
      }
      {isLoading
        ? <Loader/>
        : <div className='container'>
            <LocationFilter msg={'Enter city name'} filter={filter} setFilter={setFilter}/>
            <List list={sortedCities} route={'/weather'}/>
         </div>
      }
    </div>
  )
}

export default Cities;
