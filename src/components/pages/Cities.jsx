import React, {useContext} from 'react'
import { StateContext } from '../../context/state.context';
import { useNavigate } from 'react-router-dom';


 function Cities() {

  const router = useNavigate();
  const {selectedCountry, setSelectedCity} = useContext(StateContext);
  const selectCity = (city) => {
    setSelectedCity(city);
    router(`/country/:${ selectedCountry.country }/city/:${city}/weather`);
  }
  return (
    <div>
      {selectedCountry.cities.map((city, id) => 
        <div 
          key={id}
          onClick={() => selectCity(city)}
        >
          {city}
        </div>
      )}
    </div>
  )
}

export default Cities;