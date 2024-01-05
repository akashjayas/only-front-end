// NavBar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from "C://Users//alfredeins_gabriel//Desktop//React//Only Front end//only-front-end//src//Assests//login_signUp.svg";
import Logo from "C://Users//alfredeins_gabriel//Desktop//React//Only Front end//only-front-end//src//Assests//png//Logo.png";
import './NavBar.css';
import '../styleguide.css';
import LoginPage from '../LoginPage/LoginPage';

function NavBar() {
  const [visible, setvisible] = useState(false);

  const login = () => {
    setvisible(!visible);
  };

  return (
    <div className='nav-bar'>
      <div className='Trip-Logo-Container' >
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <img className='Trip-Logo' src={Logo}/>
        </Link>
      </div>
      <div className='menu-list' >
        <div className='nav'>
          <Link to="/EventsHome">
            <button>Events</button>
          </Link>
        </div>
        <div className='nav'>
          <Link to="/HotSpotsHome">
            <button>Hot Spots</button>
          </Link>
        </div>
        <div className='nav'>
          <Link to="/OrganizerHome">
            <button>Organizers</button>
          </Link>
        </div>
      </div>
      <div className='login-signup-outline'>
        <button className='login-button' onClick={login}>
          <img className='login-signup' alt='login or sign up' src={Login} />
        </button>
      </div>
      {visible && <LoginPage onClose={() => setvisible(false)} />}
    </div>
  );
}

export default NavBar;
