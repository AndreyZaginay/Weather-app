 import React from 'react'
 
 function Weather({ weather }) {
   return (
    <div>
        {!weather
            ? <h1>Weather not found</h1>
            : <div>
                <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="" />
            </div>
        }
    </div>
   )
 }
 
 export default Weather;