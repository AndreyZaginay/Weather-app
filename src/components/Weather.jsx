 import React from 'react'
 
 function Weather({ weather }) {
   return (
    <div className='weather'>
        {!weather
            ? <h1>Weather not found</h1>
            : <div className='weather-container'>
                <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="" />
              </div>
        }
    </div>
   )
 }
 
 export default Weather;