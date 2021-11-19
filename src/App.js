import logo from './logo.svg';
import './App.css';
import Header from './sections/header';
import {  Navigate, Route, Routes, useLocation, useNavigate } from 'react-router';
import Login from './pages/login';
import SignUp from './pages/signup';
import Profile from './pages/profile';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './store/actions/user';
import Products from './pages/products';
import CreateProd from './pages/createProd';
import Prod from './pages/prod';

function App() {

  const token = localStorage.getItem('token')
  const location = useLocation()

  if(!token
    &&location.pathname !== '/login'
    &&location.pathname !== '/signup'){
      return(
        <div className="App">
        <Header/>
        <Login/>
      </div>
      )
    }

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/create' element={<CreateProd/>}/>
        <Route path='/product' element={<Prod/>}/>
        <Route path='/product/change' element={<CreateProd/>}/>
      </Routes>
        
    </div>
  );
}

export default App;
