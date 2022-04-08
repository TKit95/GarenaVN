import { Routes, Route } from 'react-router-dom';
import News from './News';
import Events from './Events';
import Home from './Home';
import Games from './Games';
import Communities from './Communities';
import Handbooks from './Handbooks';
import Login from './Login';
import './App.css';
import './index.css';
import './grid.css';
import './res.css';


function App() {
  return (
      <div>
        
        

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/News' element={<News />} />
          <Route path='/Events' element={<Events />} />
          <Route path='/Games' element={<Games />} />
          <Route path='/Communities' element={<Communities />} />
          <Route path='/Handbooks' element={<Handbooks />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </div>
  )
}

export default App;
