import React, { Component, Suspense } from 'react';
import { Route,NavLink } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import './App.css'
// import Courses from './containers/Courses/Courses';
// import Users from './containers/Users/Users';

const Courses=React.lazy(()=>import('./containers/Courses/Courses'));
const Users=React.lazy(()=>import('./containers/Users/Users'));

class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <div className="App">
      <section>
        <nav>
          <ul>
            <li><NavLink exact to="/users">Users</NavLink></li>
            <li><NavLink exact to="/Courses">Courses</NavLink></li>
          </ul>
        </nav>
      </section>


      <switch>
      <Route path="/users" render={()=>(
        <Suspense fallback={<div>Something went wrong</div>}>
          <Users/>
        </Suspense>
      )}/>
        
      <Route path="/Courses" render={()=>(
        <Suspense fallback={<div>Something went wrong.....!</div>}>
          <Courses/>
        </Suspense>
      )}/>
      </switch>
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

