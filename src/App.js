import './App.css';
import { BrowserRouter,Route, Routes, Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Item from 'antd/lib/list/Item';
import {Login, Home} from './pages'



const App=()=> {

  return (
    <BrowserRouter>
      <header className="App-header">
        
          <Link to='/login'><Button >ورود</Button></Link>
        
        <div className='menu'>
          <Link to='/'>رشدانا</Link>
          <Link to='#'>درباره ما</Link>
          <Link to='#'>تماس با ما</Link>
        </div>
     </header>
     <Routes>
       <Route path='/login' element={<Login/>}/>
       <Route path='/' element={<Home/>}/>

     </Routes>

     
    </BrowserRouter>
  );
}

export default App;


