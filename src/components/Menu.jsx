import React from 'react';
import { NavLink } from 'react-router-dom';


const Menu = () => {
    return (
        <>
            <div className='div_menu'>
                <NavLink className='navbar' exact activeClassName='active-class' to='/'> Home </NavLink>
                <NavLink className='navbar' exact activeClassName='active-class' to='/Courses'> Courses </NavLink>
                <NavLink className='navbar' exact activeClassName='active-class' to='/Contact'>Contact</NavLink>
                <NavLink className='navbar' exact activeClassName='active-class' to='/Colleges' >Colleges</NavLink>
                <NavLink className='navbar' exact activeClassName='active-class' to='/Services'>Services</NavLink>

                <div className='div_login'>
                <NavLink className='navbar' exact activeClassName='active-class' to='/Login'>Login</NavLink>
                {/* <NavLink className='navbar' exact activeClassName='active-class' to='/Reg'>Register</NavLink> */}
                
                </div>

                
            </div>
            
        </>
    )
};

export default Menu;