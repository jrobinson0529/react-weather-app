import axios from 'axios';

const getCurrentWeather = (city) => new Promise((resolve, reject) => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f290c4061d9be341254dbcbbe6a907fc&units=imperial`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getCurrentWeather;
