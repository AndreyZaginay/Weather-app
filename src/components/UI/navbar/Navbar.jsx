import React, {useContext} from 'react';

import MyInput from '../input/MyInput'

function Navbar() {


  return (
    <div className='navbar'>
        <MyInput></MyInput>
        {/* <div className='selected-data'>
            <span>
                Selected country:&nbsp;&nbsp;
                {selectedCountry
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
        </div> */}
    </div>
  )
}

export default Navbar