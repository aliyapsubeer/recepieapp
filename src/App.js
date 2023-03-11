
import './App.css';
import Frontside from './comp2/Frontside';
import { Navbar } from './comp2/Navbar';
import Recipeadd from './comp2/Recipeadd';
import { Route, Routes } from 'react-router-dom';
import Search from './comp2/Search';
// import Topportion from './comp2/Topportion';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Routes>
     <Route path='/' element={<Frontside/>}></Route>
    <Route path='/create-recipe' element={<Recipeadd/>}></Route>
     <Route path='/search' element={<Search/>}></Route>
   
     </Routes>
    
    </div>
  );
}

export default App;
