import { useEffect } from 'react';
import './style/App.css';
import WeatherService from './API/WeatherService';
import { useFetching } from './hooks/useFetching';

function App() {

  // const [fetchWeatherByCountry, isLoading, error] = useFetching( async () => {
  //   const response = await WeatherService.getWeather('USA');
  //   console.log(response);
  // });

  // useEffect(() => {
  //   fetchWeatherByCountry();
  // }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
