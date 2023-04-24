import React, {useContext} from 'react';
import MyInput from '../input/MyInput'
import { StateContext } from '../../../context/state.context';

function Navbar() {

  const {selectedCountry, selectedCity} = useContext(StateContext);


  return (
    <div className='navbar'>
        <MyInput></MyInput>
        <div className='selected-data'>
            <span>
                Selected country:&nbsp;&nbsp;
                {selectedCountry.country 
                    ? selectedCountry.country
                    : 'Country not selected'
                }
            </span>
            <span>
                Selected city:&nbsp;&nbsp;
                {selectedCity 
                    ? selectedCity
                    : 'City not selected'
                }
            </span>
        </div>
    </div>
  )
}

export default Navbar