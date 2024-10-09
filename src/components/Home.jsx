import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="my-5">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Welcome to the Weather App!</Card.Title>
          <Card.Text>
            Check the current weather and 5-day forecast for any city in the world. Stay informed, stay prepared!
          </Card.Text>
          <Button variant="primary" href="/features">Discover Features</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
