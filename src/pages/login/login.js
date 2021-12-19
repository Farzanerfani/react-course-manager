import { Button } from 'react-bootstrap';
import './login.css'
const Login=()=>{
    return(
        <div className='login-container'>
                <div className='login-form'>
                    <h1>رشدانا</h1>
                    <h2>ورود</h2>
                    <input placeholder='شماره تماس'/>
                    <input placeholder='رمز عبور'/>
                    <Button>ورود</Button>

                </div>
        </div>
    )
}
export default Login;