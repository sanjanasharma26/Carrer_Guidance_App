import React from 'react';
import { Link } from 'react-router-dom';




const Reg = () => {
   
    return (
        <>
            <Link to='/'>Back to Home Page</Link>
            <br></br>
             <div className='div_rform'>
                 <br></br>
                <h1>  Register </h1>
                <br></br><br></br>
                <form action='#' onSubmit='return validation()'>
                    <input id='fname' name='fname' className='reg_input' type={Text} placeholder='Enter your Full Name' required='required'
                    autoComplete='off'/>
                    
                    <br></br><br></br><br></br><br></br>
                    <input id='ph' name='ph' className='reg_input' type={Text} placeholder='Enter your Phone Number' required='required'
                    autoComplete='off'/>
                    <br></br><br></br><br></br><br></br>
                    <input id='email' name='email' className='reg_input' type={Text} placeholder='Enter your Email' required='required'
                    autoComplete='off'/>
                    <br></br><br></br><br></br><br></br>
                    <input className='reg_input' type={Text} placeholder='Standard' required='required'/>
                    <br></br><br></br><br></br><br></br>
                    
                    <input id='pass' name='pass' className='reg_input' type='password' placeholder='Enter your Password' required='required'/>
                    <br></br><br></br><br></br><br></br>
                    <input id='conpass' name='conpass' className='reg_input' type='password' placeholder='Confirm Password' required='required'/>
                    <br></br><br></br><br></br><br></br>
                    <button className='button_design'>Register</button>
                    <br></br><br></br><br></br><br></br>
                    <h4>Existing User Login Here</h4>
                    <Link to='Login'>Login</Link>
                    <br></br><br></br><br></br><br></br>
                </form>
             </div>
        </>
    )

   
};




export default Reg;