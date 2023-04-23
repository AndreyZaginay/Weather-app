import React, {useEffect, useState,  useContext} from 'react'
import WeatherService from '../../API/WeatherService';
import { useFetching } from '../../hooks/useFetching';
import { useNavigate } from 'react-router-dom';
import { StateContext } from '../../context/state.context';


const Countries = () => {

  const router = useNavigate();
  const [countries, setCountries] = useState([]);
  const {setSelectedCountry} = useContext(StateContext);

  const [fetchCountry, isLoading, error] = useFetching( async () => {
    const response = await WeatherService.getCountries();
    console.log(response.data);
    setCountries(response.data.data);
  });

  const selectCountry = (data) => {
      setSelectedCountry(data);
      router(`/country/:${ data.country }/city`);
  }

  useEffect(() => {
    fetchCountry();
  }, []);

  return (
    <div className='country-conteiner'>
      {countries.map((country, id) => 
        <div 
            key={id}
            className='country'
            onClick={() => selectCountry(country)}
        >
            {country.country}    
        </div>
      )}
    </div>
  )
}


export default Countries;