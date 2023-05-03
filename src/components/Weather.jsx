 import React from 'react'
 
 function Weather({ weatherInfo }) {
   return (
    <div>
        {!weatherInfo
          ? <div style={{display: 'none'}}></div>
          : <div className='weather'>
              <div>
                <img className='icon-weather' src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} alt="" />
              </div>
              <div className='description'> 
                <h1>{weatherInfo.weather[0].main}</h1>
                <h5>{weatherInfo.weather[0].description}</h5>
              </div>
              <div className='temp-description'>
                <span>
                  Temp: {Math.round(weatherInfo.main.temp - 273.15)} <b>°C</b>
                </span>
                <span>
                  Wind: {weatherInfo.wind.speed} <b>m/s</b>
                </span>
              </div>
            </div>
        }
    </div>
   )
 }
 
 export default Weather;