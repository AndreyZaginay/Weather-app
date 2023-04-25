import './style/App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import { useState } from 'react';
import { StateContext } from './context/state.context';
import Navbar from './components/UI/navbar/Navbar';

function App() {

  const [selectedCountry, setSelectedCountry] = useState(null);
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
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </div>
    </StateContext.Provider>

  )
}

export default App;
