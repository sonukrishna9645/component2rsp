import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <br/>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
  
      
  
    


  </div>
  );
}

export default App;
