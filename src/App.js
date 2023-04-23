import './style/App.css';

import  Countries  from './components/pages/Countries';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./components/AppRouter";
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
