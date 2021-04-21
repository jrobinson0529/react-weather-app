import React, { useEffect, useState } from 'react';
import {
  Form, FormGroup, Label, Input
} from 'reactstrap';
import WeatherCard from '../components/weatherCard';
import getCurrentWeather from '../helpers/data/weatherData';

import './App.scss';

function App() {
  // const [setSingleCityWeather] = useState([]);
  const [weatherArray, setWeatherArray] = useState([]);
  useEffect(() => {
    getCurrentWeather('Nashville').then((response) => {
      setWeatherArray([response]);
    });
  }, []);
  // console.warn(weatherArray);
  const handleEnterPress = (e) => {
    console.warn(e.target.value);
    if (e.charCode === 13) {
      const city = e.target.value;
      getCurrentWeather(city).then((response) => {
        weatherArray.push(response);
        setWeatherArray(weatherArray);
      });
      e.preventDefault();
    }
  };
  console.warn(weatherArray);
  return (
    <div className='App'>
      <div className='weather-card-container d-flex flex-wrap'>
        {
         weatherArray.map((element) => <WeatherCard
            key={element.id}
            name={element.name}
            temp={element.main.temp}
            />)
        }
        <Form>
          <FormGroup>
            <Label for="exampleEmail">City</Label>
              <Input type="text" name="city" id="searchCity" placeholder="Type in a city name" onKeyPress={handleEnterPress}/>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}

export default App;
