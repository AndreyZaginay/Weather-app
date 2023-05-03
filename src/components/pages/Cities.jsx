import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useLocations } from '../../hooks/useLocation';
import LocationFilter from '../LocationFilter';
import Loader from '../UI/Loader/Loader';
import List from '../UI/List/List';
import { useFetchingExt } from "../../hooks/useFetching";
import { getCountryCities } from "../../API/countires.api";
import Error from '../UI/Error/Error';

const Cities = () => {
    const params = useParams();
    const [cities, setCities] = useState([]);
    const [filter, setFilter] = useState({query: ''});
    const sortedCities = useLocations(cities, filter.query);

    const [fetchCities, fetchingState] = useFetchingExt(() => getCountryCities(params.countryName));

    useEffect(() => {
        fetchCities()
            .then(response => setCities(response.data))
            .catch((error) => console.log(error));
    }, []);

    return ( 
        <div>
            {fetchingState.error &&
                <Error error={fetchingState.error}/>
            }
            {fetchingState.isLoading
                ?   <Loader/>
                :   <div className='container'>
                        {fetchingState.error
                            ? <span style={{display: 'none'}}></span>
                            : <div>  <LocationFilter msg={'Enter city name'} filter={filter} setFilter={setFilter}/>
                            <List list={sortedCities} route={'/weather'}/></div>
                        }
                    </div>
            }
        </div>
    )
}

export default Cities;
