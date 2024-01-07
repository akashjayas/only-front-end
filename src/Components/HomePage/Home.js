import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import vid from "./pexels_videos_2096549 (1080p).mp4";
import "./Home.css";
import EventComponent from "../Events/EventComponent";
import TouristSpotComponent from "../TouristSpots/TouristSpotComponent";
import Event_Details from "../Files/Event_Details";
import Tourist_Spot_Details from "../Files/TouristSpotDetails";

function Home() {
  const [firstEvent, setFirstEvent] = useState();
  const noOfEvents = Event_Details.length;

  return (
    <div className="home">
      <video src={vid} autoPlay loop muted />
      <div className="header">
        <div className="nav-container">
          {" "}
          <NavBar />{" "}
        </div>{" "}
        <div className="header-content"> welcome to trip partner </div>{" "}
      </div>{" "}
      <div className="body">
        {" "}
        <div className="container">
          <h3> Events </h3>{" "}
        </div>{" "}
        <div className="popular-event-container">
          {" "}
          {Event_Details.map((details, index) => (
            <EventComponent
              eventId={details.event_id}
              eventName={details.event_name}
              eventDiscription={details.event_discription}
              eventDate={details.event_happening}
              eventImage={details.event_image}
              eventAddress={details.event_address}
              alt={details.image_alt}
            />
          ))}{" "}
        </div>{" "}
        <div className="container">
          {" "}
          <h3> Popular HotSpots </h3>
        </div>
        <div className="popular-hotspot-container">
          {" "}
          {Tourist_Spot_Details.map((spot) => (
            <TouristSpotComponent
              spotId={spot.spot_id}
              spotName={spot.spot_name}
              spotDescription={spot.spot_description}
              spotImage={spot.spot_image}
              spotAlt={spot.image_alt}
            />
          ))}{" "}
        </div>{" "}
      </div>{" "}
      <div className="footer">
        <div className="footer-container"> </div>{" "}
      </div>
    </div>
  );
}
export default Home;
