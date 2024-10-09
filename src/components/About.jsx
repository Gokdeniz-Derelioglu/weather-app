import React from 'react';
import { Card, Container } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-5">
      <h2>About This App</h2>

      <p>
        Welcome to my simple weather app! This app is designed to provide users with accurate and real-time weather information.
        Whether you’re planning a trip or just curious about the current weather in your city, this app can help.
      </p>

      <p>
        Built using React and Bootstrap for a clean and responsive interface, this app aims to give you the best experience across any device.
        The app integrates with the OpenWeatherMap API to ensure you always get the latest weather data.
      </p>

      <p>
        Feel free to search for any city in the world and see the current temperature, weather conditions, and a 5-day forecast.
        Whether it's sunny or stormy, our app has you covered!
      </p>

      <p>
        Upcoming features:
        <li>Temperature dynamic color change</li>
        <li>Improved mobile compatability</li>
        <li>Theme change button on header</li>
      </p>
    </Container>
  );
};

export default About;
