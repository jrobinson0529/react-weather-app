import React, { useState } from 'react';
import {
  Form, FormGroup, Label, Input
} from 'reactstrap';
import WeatherCard from '../components/weatherCard';
import getCurrentWeather from '../helpers/data/weatherData';

import './App.scss';

function App() {
  const [weatherArray, setWeatherArray] = useState([]);
  const handleEnterPress = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      const city = e.target.value;
      getCurrentWeather(city).then((response) => {
        weatherArray.push(response);
        setWeatherArray([...weatherArray]);
        console.warn([...weatherArray]);
      });
    }
  };
  return (
    <div className='App'>
        <WeatherCard weatherArray={weatherArray}/>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">City</Label>
              <Input type="text" name="city" id="searchCity" placeholder="Type in a city name" onKeyPress={handleEnterPress}/>
          </FormGroup>
        </Form>
    </div>
  );
}

export default App;
