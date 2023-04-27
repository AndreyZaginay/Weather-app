import { BrowserRouter } from 'react-router-dom';

import './style/App.css';
import AppRouter from "./components/AppRouter";
import Navbar from './components/UI/Navbar/Navbar';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </div>
  )
}

export default App;
