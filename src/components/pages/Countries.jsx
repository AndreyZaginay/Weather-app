import React, { useEffect, useState } from 'react';

import { useLocations } from '../../hooks/useLocation';
import { useFetchingExt } from '../../hooks/useFetching';
import Loader from '../UI/Loader/Loader';
import LocationFilter from '../LocationFilter';
import List from '../UI/List/List';
import { getCountries } from "../../API/countires.api";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState({query: ''});

    const sortedCountries = useLocations(countries, filter.query);

    const [fetchCountries, fetchState] = useFetchingExt(getCountries);

    useEffect(() => {
        fetchCountries()
            .then(response => setCountries(response.data.map(location => location.name)));
    }, []);

    return (
        <div>
            {fetchState.isLoading
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
