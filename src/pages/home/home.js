import './home.css';
import {Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Item from 'antd/lib/list/Item';

const Home=()=>{
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
    return(
       <div>
       <div className='baner'>
       <img 
       src={require('../../image/header.png')}
       >
       </img>
     </div>
    <div className='home-container'>
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

        </div>

    )
}
export default Home;