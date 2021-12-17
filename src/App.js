import './App.css';
import {Button} from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Item from 'antd/lib/list/Item';



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
        <Button >
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
    <div className='container'>
     {List.map((item)=>(
       <div className='Box-container' key={item.id}>
        <img src={item.image.url}/>
        <br></br>
        <h3>{item.title}دوره مقدماتی</h3>
        <br></br>
         مدت زمان :{item.duration} ساعت
        <br></br>
        <br></br>
        مدرس :{item.mentor}
        <br></br>
        <br></br>
        <Button>
          جزئیات دوره
        </Button>
       </div>
     ))}
     </div>

     
    </BrowserRouter>
  );
}

export default App;

// const Box = (props) => {
//   return (
//       <div className='Box-container'>
//           <div>
//             {props.item.title}

//           </div>
//       </div>
//   )
// }

