import './css/main.scss';

import {
  travelerData,
  tripsData,
  destinationsData
} from './API'

let traveler, trips, destinations

window.addEventListener('load', getData);

function getData() {
  Promise.all([travelerData(), tripsData(), destinationsData()])
    .then(data => {
      traveler = data[0];
      trips = data[1];
      destinations = data[2];
    })
}
