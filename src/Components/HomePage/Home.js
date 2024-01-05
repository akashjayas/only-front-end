import React,{useState,useEffect} from 'react'
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar'
import './Home.css'
import EventComponent from '../Events/EventComponent'
// import axios from 'axios'
import TouristSpotComponent from '../TouristSpots/TouristSpotComponent'
import Event_Details from '../Events/Event_Details'
import Tourist_Spot_Details from '../TouristSpots/TouristSpotDetails'
function Home() {
  const imageUrls=[
    "https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?size=626&ext=jpg&ga=GA1.1.934692035.1704366009&semt=sph",
    "https://img.freepik.com/free-photo/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand_335224-1356.jpg?size=626&ext=jpg&ga=GA1.1.934692035.1704366009&semt=sph",
    "https://img.freepik.com/free-photo/travel-concept-with-baggage_23-2149153260.jpg?size=626&ext=jpg&ga=GA1.1.934692035.1704366009&semt=sph",
    "https://img.freepik.com/free-photo/rear-view-happy-hiking-family-embracing_74855-21366.jpg?size=626&ext=jpg&ga=GA1.1.934692035.1704366009&semt=sph",
    "https://img.freepik.com/free-photo/nature-beauty-revealed-coastline-turquoise-waters-generative-ai_188544-12614.jpg?size=626&ext=jpg&ga=GA1.1.934692035.1704366009&semt=sph",
    "https://img.freepik.com/free-photo/group-friends-meeting-city-center-having-fun-together-walking-through-urban_1150-4593.jpg?size=626&ext=jpg&ga=GA1.1.934692035.1704366009&semt=ais"
    // Add more image URLs as needed
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Function to change background image
  const changeBackgroundImage = () => {
    // Get the next index in the array, looping back to 0 if at the end
    const nextIndex = (currentImageIndex + 1) % imageUrls.length;
    setCurrentImageIndex(nextIndex);
  };

  // Set an interval to change the background image every 5 seconds (5000 milliseconds)
  useEffect(() => {
    const intervalId = setInterval(changeBackgroundImage, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  const containerStyle = {
    height:'730px',
    width:'100%',
    backgroundImage: `url('${imageUrls[currentImageIndex]}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 1s ease-in-out',
  };

  return (
    <div className='home' >

      <div className='first-slide' style={containerStyle}>
        <div className='nav-container'><NavBar/></div>
        <div className='search-container' >
          <SearchBar/>
        </div>
      </div>
          <h3>Events</h3>
          
          <div className='popular-event-container'>
              {
              Event_Details.map
                (details=>
                  (
                    <EventComponent
                    eventId={details.event_id}
                    eventName={details.event_name} 
                    eventDiscription={details.event_discription} 
                    eventDate={details.event_happening} 
                    eventImage={details.event_image} 
                    eventAddress={details.event_address} 
                    alt={details.image_alt}/>
                  )
                )
              }
          </div>
        <h3>Popular Spots</h3>
          <div className='popular-hotspot-container'>
            {Tourist_Spot_Details.map(spot=>(
            <TouristSpotComponent
            spotId={spot.spot_id}
            spotName={spot.spot_name}
            spotDescription={spot.spot_description}
            spotImage={spot.spot_image}
            spotAlt={spot.image_alt}/>
            ))}
            
          </div>
     

  </div>

  )
}
export default Home