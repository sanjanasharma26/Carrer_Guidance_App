
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Colleges from './components/Colleges';
import Contact from './components/Contact';
import Services from './components/Services';
import Error from './components/Error';
import Menu from './components/Menu';
import Courses from './components/Courses';
import Login from './components/Login';
import Reg from './components/Reg';


const App = () => {
  return (
    <>
      {/* <Menu/> */}
      <br></br><br></br>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Colleges' component={Colleges} />
        <Route path='/contact' component={Contact} />
        <Route path='/services' component={Services} />
        <Route path='/Courses' component={Courses} />
        <Route path='/Login' component={Login} />
        <Route path='/Reg' component={Reg} />
         
        <Route component={Error} />
      </Switch>
      
    </>
  )

};
export default App;
