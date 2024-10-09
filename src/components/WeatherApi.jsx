// src/weatherApi.js
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

const BASE_FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const getFiveDayForecast = async (city) => {
  try {
    const response = await axios.get(BASE_FORECAST_URL, {
      params: {
        q: city,
        units: 'metric', // or 'imperial' if you prefer Fahrenheit
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching 5-day forecast:', error.response?.data || error.message);
    throw error;
  }
};