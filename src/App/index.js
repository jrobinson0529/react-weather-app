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
      });
    }
  };
  return (
    <div className='App'>
      <header>
        <h1 className='header-text'>Weathertrackr</h1>
      </header>
        {weatherArray.length > 0 ? <WeatherCard weatherArray={weatherArray}/> : <h4>Add a city!</h4>}
        <div className='form-container'>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Enter your city!</Label>
                <Input type="text" name="city" id="searchCity" placeholder="Type in a city name" onKeyPress={handleEnterPress}/>
            </FormGroup>
          </Form>
        </div>
    </div>
  );
}

export default App;
