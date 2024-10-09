import React from 'react';
import { Container, Button } from 'react-bootstrap';
import WeatherDisplay from './WeatherDisplay';

const MainContent = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <WeatherDisplay />
    </div>
  );
};

export default MainContent;
