

import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: 200,
    },
  },
}));

export default function ValidationTextFields() {
  const classes = useStyles();

  return (
    <>
     <p className='para_course'>If you want a personal guidance about your carrer or you have any doubt regarding carrer then feel free to contact us. we are here to help you .</p>
    <div className='div_form'>
     
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField error id="standard-error" label="Name" />
        <TextField
          error
          id="standard-error"
          label="Phone No."
         
        />
      </div>
      <div>
      <TextField
          error
          id="standard-error"
          label="Email Address"
         
        />
        <TextField
          error
          id="standard-error"
          label="City"
         
        />
      </div>
      <div>
      <TextField
          error
          id="standard-error"
          label="Standard"
         
        />
        <TextField
          error
          id="standard-error"
          label="10th/12th stream"
         
        />
      </div>
      <div>
      <TextField
          error
          id="standard-error"
          label="course"
         
        />
        <TextField
          error
          id="standard-error"
          label="Contact Timing"
         
        />
      </div>
      <button className='button_design'>Submit</button>
    </form>
    </div>
    </>
  );
}