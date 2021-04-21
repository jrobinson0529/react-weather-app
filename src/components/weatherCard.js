/* eslint-disable arrow-body-style */
import React from 'react';
import { PropTypes } from 'prop-types';

import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

function WeatherCard(props) {
  return (
    <div className='w-25 m-3'>
      <Card >
        <CardBody>
          <CardTitle tag="h5">{props.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.temp}</CardSubtitle>
        </CardBody>
        <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
WeatherCard.propTypes = {
  name: PropTypes.string,
  temp: PropTypes.number
};

export default WeatherCard;
