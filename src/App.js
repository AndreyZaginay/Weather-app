import './style/App.css';

import  Countries  from './components/pages/Countries';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import { useState } from 'react';
import { StateContext } from './context/state.context';
function App() {

  const [selectedCountry, setSelectedCountry] = useState({});
  const [selectedCity, setSelectedCity] = useState('');

  return (
    <StateContext.Provider value={{
      selectedCountry,
      setSelectedCountry,
      selectedCity,
      setSelectedCity
    }}>
       <div className="App">
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </div>
    </StateContext.Provider>

  )
}

export default App;
