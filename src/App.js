import { BrowserRouter } from 'react-router-dom';

import './style/App.css';
import AppRouter from "./components/AppRouter";
import Navbar from './components/UI/navbar/Navbar';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </div>
  )
}

export default App;
