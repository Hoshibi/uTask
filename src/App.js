import './App.css';
import Home from './pages/home'
import Kanban from './pages/kanban'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/kanban' element={<Kanban />}/>
    </Routes>
  );
}

export default App;
