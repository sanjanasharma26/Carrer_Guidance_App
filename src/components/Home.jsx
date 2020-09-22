import React from 'react';
import img1 from './img1.jpg';
import eng from './eng.jpg';
import law from './law.jpg';
import doc from './doc.jpg';
import Card from './Card';
import { Button } from '@material-ui/core';

        
        const Services = () => {
            return (
                <>
            <img src={img1} height='600px' width='1500px'/>
            <br></br> <br></br>
            <h2 className='heading2'>Common Courses</h2>
            <br></br> <br></br>
            <div className='div_card'>
                <div className='under_card'>
                    <Card 
                    head='Engineer'
                    imgsrc={eng}/> 
                </div>
                <div className='under_card'>
                    <Card 
                    head='Doctor'
                    imgsrc={doc}/> 
                </div>
                <div className='under_card'>
                    <Card 
                    head='Lawyer'
                    imgsrc={law}/>
                </div>
            </div>
            <br></br> <br></br>
           
            <a href='Courses'> <button className='button_home'>More courses</button></a>
            <br></br> <br></br>
            <div className='footer'>
                <h3>Company address and other details here..</h3>
            </div>
            </>
            )
        };
        
        export default Services;