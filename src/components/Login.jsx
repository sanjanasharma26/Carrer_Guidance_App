import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <>
            <Link to='/'>Back to Home Page</Link>
            <br></br>
             <div className='div_lform'>
                 <br></br>
                <h1> Login / Register </h1>
                <br></br><br></br>
                <form>
                    <input className='login_input' type={Text} placeholder='Enter your Email'/>
                    <br></br><br></br><br></br><br></br>
                    <input className='login_input' type='password' placeholder='Enter your Password'/>
                    <br></br><br></br><br></br><br></br>
                    <button className='button_design' type='submit'>Login</button>
                    <br></br><br></br><br></br><br></br>
                    <h4>New User Register Here</h4>
                    
                    <Link to='Reg'>Register</Link>
                    <br></br><br></br><br></br><br></br>
                    

                </form>
             </div>
        </>
    )
};

export default Login;