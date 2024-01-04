// import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar';
// import axios from 'axios';
import './TouristSpotsHomePage.css';
import TouristSpotComponent from './TouristSpotComponent';
// import Loading from '../LoadingComponents/Loading';
function TouristSpotHomePage() {
  return (
    <div>
      <div className='nav'>
        <NavBar/>
      </div>
      <div className='hotspot-container'>
      <TouristSpotComponent/>
      </div>
    </div>
  )
}

export default TouristSpotHomePage;