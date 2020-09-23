import React from 'react';
import Card from './Card';
import Menu from './Menu';


const Courses = () => {
    return (
    <>
         <Menu/>
    <br></br><br></br>
        <p className='para_course'> You can see different courses here. According to your interest you can see the details of the particular course and if you want personal guidance then fo to the contact page and submit details. we can call you or whatsapp for your guidance. We have professional councelers forthe guidance. </p>
   
        <br></br><br></br>

        <div className='div_card'>
                <div className='under_card'>
                    <Card 
                    head='Engineer'
                    /> 
                </div>
                <div className='under_card'>
                    <Card 
                    head='Doctor'
                   /> 
                </div>
                <div className='under_card'>
                    <Card 
                    head='Lawyer'
                    />
                </div>
            </div>

            <br></br><br></br><br></br><br></br>

            <div className='div_card'>
                <div className='under_card'>
                    <Card 
                    head='Graphic Designer'
                    /> 
                </div>
                <div className='under_card'>
                    <Card 
                    head='Fashion Designer'
                   /> 
                </div>
                <div className='under_card'>
                    <Card 
                    head='Animation'
                    />
                </div>
            </div>

            <br></br><br></br><br></br><br></br>

            <div className='div_card'>
                <div className='under_card'>
                    <Card 
                    head='Interior Designer'
                    /> 
                </div>
                <div className='under_card'>
                    <Card 
                    head='Jewellary Designer'
                   /> 
                </div>
                <div className='under_card'>
                    <Card 
                    head='Architecture'
                    />
                </div>
            </div>

            <br></br><br></br><br></br><br></br>

            <div className='div_card'>
                <div className='under_card'>
                    <Card 
                    head='Artist'
                    /> 
                </div>
                <div className='under_card'>
                    <Card 
                    head='Teacher'
                   /> 
                </div>
                <div className='under_card'>
                    <Card 
                    head='HR'
                    />
                </div>
            </div>
    </>
    )
};

export default Courses;