import './css/main.scss';
import {
  travelerData,
  getTraveler,
  tripsData,
  destinationsData
} from './API';
import dayjs from 'dayjs';
import Traveler from './Traveler.js'

let allTravelers, traveler, trips, destinations

window.addEventListener('load', getData(3));

function getData(id) {
  Promise.all([travelerData(), getTraveler(id), tripsData(), destinationsData()])
    .then(data => {
      allTravelers = data[0];
      traveler = new Traveler(data[1]);
      trips = data[2];
      destinations = data[3];
    })
}
