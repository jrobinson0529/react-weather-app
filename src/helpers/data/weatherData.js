import axios from 'axios';
import apiKeys from '../apiKeys';

const key = apiKeys.weatherApiKey;
const getCurrentWeather = (city) => new Promise((resolve, reject) => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getCurrentWeather;
