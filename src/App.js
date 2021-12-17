import './App.css';
import {Button} from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';



const App=()=> {
  const [List,setList]=useState([]);
  useEffect(()=>{
    GetData()},[]
  )

  const GetData=async()=>{
    await axios({
      method:'GET',
      url:'http://185.204.197.151:8000/api/v1/allshops'
    }).then((res)=>{
      console.log('res',res.data.docs)
      setList(res.data.docs)
    }).catch((err)=>{
      console.log('err',err)
    }).finally(()=>{
      console.log('finally')

    })
  }

  return (
    <BrowserRouter>
      <header className="App-header">
        <Button variant='warning'>
          ورود
        </Button>
        <ul>
          <li>تماس با ما</li>
          <li>درباره ما</li>
          <li>رشدانا</li>
          <li><h3>لوگو</h3></li>

        </ul>
     </header>
     <div className='baner'>
       <img 
       src={require('./image/header.png')}
       >
       </img>
     </div>

     
    </BrowserRouter>
  );
}

export default App;
