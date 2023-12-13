import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Edit from './Pages/Edit';
import Add from './Pages/Add';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/Edit/:id' Component={Edit}></Route>
        <Route path='/Add' Component={Add}></Route>
      </Routes>
    </div>
  );
}

export default App;