/* eslint-disable arrow-body-style */
import React from 'react';
import { PropTypes } from 'prop-types';

import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const WeatherCard = (props) => {
  return (
<div className='weather-card-container d-flex flex-wrap'>
      {props.weatherArray.map((obj, i) => <Card key={i}>
        <CardBody>
          <CardTitle tag="h5"></CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{obj.name}</CardSubtitle>
        </CardBody>
        <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
        </CardBody>
      </Card>)}
</div>
  );
};
WeatherCard.propTypes = {
  weatherArray: PropTypes.array
};

export default WeatherCard;
