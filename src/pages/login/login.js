import { Button } from 'react-bootstrap';
import './login.css'
import Password from 'antd/lib/input/Password';
import {Formik} from "formik";
import * as yup from 'yup';
import axios from 'axios';
import { useState } from 'react';



const FormVlidator=yup.object().shape({
        username:yup.string()
        .required('username is required!')
        ,
        password:yup.string()
        .min(8,'min length of password is 8')
        .required('password is required!')

})
const Login=(props)=>{
    const [error,setError]=useState('');
    const PostData=(values)=>{
        console.log('values', values)
        axios({
            url:'http://185.204.197.151:8000/auth/login',
            method: 'POST',
            data:{
                username: values.username,
                password: values.password
            }
        }).then((res)=>{
            console.log('res',res)
            localStorage.setItem('token',res.data.token);
        }).catch((err)=>{
            console.log('err',err.response)
            setError(err.response.data.message)
        }).finally(()=>{

        })
    }





    return(
        <div className='login-container'>
                <Formik
                    initialValues={{
                        username:'',
                        password:''
                    }}

                    onSubmit={(values)=>{
                        PostData(values)
                    }}
                    validationSchema={FormVlidator}

                >
                    {({
                        values,
                        errors,
                        touched,
                        handleSubmit,
                        setFieldValue,
                        handleChange
                    })=>(  
                <form className='login-form'
                onSubmit={handleSubmit}
                >
                    <h1>رشدانا</h1>
                    <h2>ورود</h2>
                    <input 
                    name='username'
                    value={values.username}
                    type="text" 
                    placeholder='شماره تماس' 
                    onChange={handleChange}
                    />
                    <div className='error-login'>{errors.username && touched.username && errors.username}</div>
                    <input
                    name='password'
                    value={values.password}
                    type="password" 
                    placeholder='رمز عبور' 
                    onChange={handleChange}
                    />
                    <div className='error-login'>{errors.password && touched.password && errors.password}</div>
                    <Button 
                    type="submit"
                    >
                    ورود
                    </Button>
                    <div className='error-login'>{error}</div>

                </form>
                    )}
                </Formik>
        </div>
    )
}
export default Login;