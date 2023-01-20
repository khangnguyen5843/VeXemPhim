import logo from './logo.svg';
import './App.css';
import VeXemPhim from './pages/VeXemPhim';
import {Outlet} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <VeXemPhim/>
      <Outlet/>
    </div>
  );
}

export default App;
