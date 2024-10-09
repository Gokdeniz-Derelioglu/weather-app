import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#343a40', color: '#fff', padding: '10px 0' }}>
      <Container>
        <p style={{ textAlign: 'center', margin: 0 }}>
          &copy; 2024 WeatherApp | Developed by Gökdeniz Derelioğlu
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
