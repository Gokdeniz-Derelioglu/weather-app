import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import MainContent from './MainContent';

const Features = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">App Features</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4 text-center">
            <Card.Body>
              <Card.Title>Real-time Weather Data</Card.Title>
              <Card.Text>
                Get up-to-date weather information for any city, anywhere in the world. The app fetches data directly from a reliable weather API.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 text-center">
            <Card.Body>
              <Card.Title>5-Day Forecast</Card.Title>
              <Card.Text>
                Plan ahead with a 5-day weather forecast. Stay informed about upcoming weather changes with detailed daily reports.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 text-center">
            <Card.Body>
              <Card.Title>Responsive Design</Card.Title>
              <Card.Text>
                Use the app on any device! The responsive layout ensures it looks great on desktops, tablets, and mobile phones.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <MainContent />
    </Container>
  );
};

export default Features;
