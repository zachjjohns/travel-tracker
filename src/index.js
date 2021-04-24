import './css/main.scss';
import {
  getTraveler,
  tripsData,
  destinationsData
} from './API';
import dayjs from 'dayjs';
import Traveler from './Traveler.js'
import domUpdates from './domUpdates';

let traveler, trips, destinations

window.addEventListener('load', getData(37));

function getData(id) {
  Promise.all([getTraveler(id), tripsData(), destinationsData()])
    .then(data => {
      dataSetter.setTraveler(data[0]);
      dataSetter.setTrips(data[1], data[0]);
      dataSetter.setDestinations(data[2]);
    })
}

let dataSetter = {
  setTraveler(travelerData) {
    traveler = new Traveler(travelerData);
    domUpdates.greetUser(traveler);
  },

  setTrips(tripsData) {
    traveler.trips = tripsData.trips.filter(trip => trip.userID === traveler.id)
  },

  setDestinations(destData) {
    destinations = destData.destinations;
  }
}
