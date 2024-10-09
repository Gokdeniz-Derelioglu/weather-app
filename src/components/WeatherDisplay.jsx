import React, { useState } from 'react';
import { getFiveDayForecast } from './WeatherApi';
import './WeatherDisplay.css';
import { Container, Row, Col, Table, Form, Button, Alert, ListGroup } from 'react-bootstrap';

const WeatherDisplay = () => {
  const [city, setCity] = useState('');
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState('');
  const [searchHistory, setSearchHistory] = useState([]); // New state for search history

  const handleFetchWeather = async (e, selectedCity) => {
    e?.preventDefault(); // Prevent form submission if triggered via a click
    setError('');
    const cityName = selectedCity || city; // Use selected city from history or current input
    try {
      const data = await getFiveDayForecast(cityName);
      setForecastData(data);
      setSearchHistory((prevHistory) => [...new Set([cityName, ...prevHistory])]); // Add to history without duplicates
    } catch (error) {
      setError('Failed to fetch weather data. Please check the city name or try again later.');
    }
  };

  const setTemperatureColor = (temp) => {
    if (temp < 10) {
        return "#1E90FF"; // Cold: Blue
    } else if (temp >= 10 && temp <= 25) {
        return "#FFA500"; // Mild: Orange
    } else {
        return "#FF4500"; // Hot: Red
    }
  };

  const getWeatherIcon = (iconCode) => {
    const iconMap = {
      '01d': 'fas fa-sun',
      '01n': 'fas fa-moon',
      '02d': 'fas fa-cloud-sun',
      '02n': 'fas fa-cloud-moon',
      '03d': 'fas fa-cloud',
      '03n': 'fas fa-cloud',
      '04d': 'fas fa-cloud',
      '04n': 'fas fa-cloud',
      '09d': 'fas fa-cloud-showers-heavy',
      '09n': 'fas fa-cloud-showers-heavy',
      '10d': 'fas fa-cloud-rain',
      '10n': 'fas fa-cloud-rain',
      '11d': 'fas fa-bolt',
      '11n': 'fas fa-bolt',
      '13d': 'fas fa-snowflake',
      '13n': 'fas fa-snowflake',
      '50d': 'fas fa-smog',
      '50n': 'fas fa-smog'
    };
    return iconMap[iconCode] || 'fas fa-cloud';
  };

  return (
    <Container className="weather-container">
      <Form onSubmit={handleFetchWeather} className="weather-section">
        <Form.Group controlId="formCity">
          <Form.Label>Enter City</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter city name" 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">Get 5-Day Forecast</Button>
      </Form>

      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

      {searchHistory.length > 0 && (
        <div className="weather-section">
          <h3>Search History</h3>
          <ListGroup>
            {searchHistory.map((historyCity, index) => (
              <ListGroup.Item
                key={index}
                action
                onClick={(e) => handleFetchWeather(e, historyCity)} // Fetch weather for the selected city
              >
                {historyCity}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      )}

      {forecastData && (
        <>
          <div className="weather-section">
            <h2 className="weather-title">{forecastData.city.name}, {forecastData.city.country}</h2>
            <Row>
              <Col sm={6}>
                <div className="temperature">
                  {forecastData.list[0].main.temp}°C
                </div>
                <div className="weather-details">
                  {forecastData.list[0].weather[0].description}
                </div>
              </Col>
              <Col sm={6} className="text-right">
                <div className="weather-icon">
                  <i className={getWeatherIcon(forecastData.list[0].weather[0].icon)}></i>
                </div>
                <div className="weather-details">
                  <strong>High:</strong> {forecastData.list[0].main.temp_max}°C<br />
                  <strong>Low:</strong> {forecastData.list[0].main.temp_min}°C<br />
                  <strong>Wind:</strong> {forecastData.list[0].wind.speed} m/s
                </div>
              </Col>
            </Row>
          </div>

          <div className="weather-section">
            <h3>Today's Weather</h3>
            <Row className="hourly-weather">
              {forecastData.list.slice(0, 5).map((forecast, index) => (
                <Col key={index} xs={4} sm={2} className="hour">
                  <div>{new Date(forecast.dt_txt).getHours()}:00</div>
                  <div className="weather-icon">
                    <i className={getWeatherIcon(forecast.weather[0].icon)}></i>
                  </div>
                  <div>{forecast.main.temp}°C</div>
                </Col>
              ))}
            </Row>
          </div>

          <div className="weather-section">
            <h3>Next 5 Days</h3>
            <Table className="five-day-forecast">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Temp</th>
                  <th>Condition</th>
                  <th>Wind</th>
                  <th>Humidity</th>
                </tr>
              </thead>
              <tbody>
                {forecastData.list.slice(0, 40).filter((_, index) => index % 8 === 0).map((forecast, index) => (
                  <tr key={index}>
                    <td>{new Date(forecast.dt_txt).toLocaleDateString()}</td>
                    <td>{forecast.main.temp}°C</td>
                    <td><i className={getWeatherIcon(forecast.weather[0].icon)}></i> {forecast.weather[0].description}</td>
                    <td>{forecast.wind.speed} m/s</td>
                    <td>{forecast.main.humidity}%</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </>
      )}
    </Container>
  );
};

export default WeatherDisplay;
