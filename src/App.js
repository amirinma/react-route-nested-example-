import './App.css';
import {Link, Route, Routes} from "react-router-dom"
import Dogs from './Components/Dogs';
import Bairds from './Components/Bairds';
import Lpdogs from './Components/LpDogs';
import Hpdogs from './Components/HpDogs';
function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Bairds</Link>
        <Link to='/dogs'>Dogs</Link>
      <Routes>
        <Route exact path='/' element={<Bairds/>}/>
        <Route exact path='/dogs' element={<Dogs/>}/>
        <Route path='/dogs/lp' element={<Lpdogs />} />
        <Route path='/dogs/hp' element={<Hpdogs />} />
      </Routes>
      </nav>
    </div>
  );
}

export default App;
