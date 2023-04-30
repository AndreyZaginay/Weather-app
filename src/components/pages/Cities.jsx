import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useLocations } from '../../hooks/useLocation';
import LocationFilter from '../LocationFilter';
import Loader from '../UI/Loader/Loader';
import List from '../UI/List/List';
import { useFetchingExt } from "../../hooks/useFetching";
import { getCountryCities } from "../../API/countires.api";

const Cities = () => {
    const params = useParams();
    const [cities, setCities] = useState([]);
    const [filter, setFilter] = useState({query: ''});
    const sortedCities = useLocations(cities, filter.query);

    const [fetchCities, fetchingState] = useFetchingExt(() => getCountryCities(params.countryName));

    useEffect(() => {
        fetchCities()
            .then(response => setCities(response.data));
    }, []);

    return (
        <div>
            {fetchingState.error &&
                <h1 style={{textAlign: 'center'}}>Error: ${fetchingState.error}</h1>
            }
            {fetchingState.isLoading
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
