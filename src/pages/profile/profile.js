import { useEffect, useState } from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import './profile.css'
const Profile=()=>{
    const [user , setUser]=useState('');
    const [username , setUsername]=useState('');
    const [fullname , setFullname]=useState('');

    useEffect(()=>{
        GetData()},[]
      )

    const GetData=async()=>{
        await axios({
          method:'GET',
          url:'http://185.204.197.151:8000/api/v1/getuser',
          headers: {token: localStorage.getItem('token')}
        }).then((res)=>{
          console.log('res',res.data)
          setUser(res.data)
        }).catch((err)=>{
          console.log('err',err)
        }).finally(()=>{
          console.log('finally')
    
        })
      }
      const UpdateData=async()=>{
        await axios({
          method:'PUT',
          url:'http://185.204.197.151:8000/api/v1/updateuser' ,
          headers: {token: localStorage.getItem('token')},
          body:
          {
          username:username,
          fullname:fullname
          }
        }).then(res=>{
          console.log('res',res.data)
        }).catch(err=>{
          console.log('err',err)
        })
      }
    return(
        <div className='container-profile'>
            <div className='boxa'>
                <div className='info'>
                    اطلاعات شخصی
                </div>
                <hr></hr>
                <div className='profile'>
                    <input onChange={(e)=>setUsername(e.target.value)}/>
                    <input onChange={(e)=>setFullname(e.target.value)}/>
                    <Button
                    onClick={UpdateData()}>
                     ویرایش
                    </Button>
                        </div>

            </div>
            <div className='boxb'>
            <div className='img'>
            </div>
            <div className='center'>{user.username}</div>
            <div className='menu'>
                <ul>
                    <li>اطلاعات شخصی</li>
                    <li>خروج</li>
                </ul>
            </div>
            </div>
        </div>
    )
}
export default Profile;