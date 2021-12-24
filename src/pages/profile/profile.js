import { useState } from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import './profile.css'
const Profile=()=>{
    const [user , setUser]=useState('');
    const token=localStorage.getItem('token');

    const GetData=async()=>{
        await axios({
          method:'GET',
          url:'http://185.204.197.151:8000/api/v1/getuser',
        }).then((res)=>{
          console.log('res',res.data)
          setUser(res.data)
        }).catch((err)=>{
          console.log('err',err)
        }).finally(()=>{
          console.log('finally')
    
        })
      }
      const UpdateData=async(id)=>{
        console.log(id)
        await axios({
          method:'put',
          url:'http://185.204.197.151:8000/api/v1/updateuser' + id 
        }).then(res=>{
          console.log('res',res)
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
                    <input/>
                    <input/>
                    <Button>
                     ویرایش
                    </Button>
                        </div>

            </div>
            <div className='boxb'>
            <div className='img'>
            </div>
            <div className='center'>نام</div>
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