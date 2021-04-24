import './css/main.scss';
import {
  getTraveler,
  tripsData,
  destinationsData
} from './API';
import dayjs from 'dayjs';
import Traveler from './Traveler.js'
import domUpdates from './domUpdates';

let traveler, destinations

window.addEventListener('load', getData(9));

function getData(id) {
  Promise.all([getTraveler(id), tripsData(), destinationsData()])
    .then(data => {
      dataSetter.setTraveler(data[0]);
      dataSetter.setTrips(data[1], data[0]);
      dataSetter.setDestinations(data[2]);
      dataSetter.matchTripsToDestinations();
    })
}

let dataSetter = {
  setTraveler(travelerData) {
    traveler = new Traveler(travelerData);
    domUpdates.greetUser(traveler);
  },

  setTrips(tripsData) {
    traveler.trips = tripsData.trips.filter(trip => trip.userID === traveler.id);
    console.log(traveler.trips);
  },

  setDestinations(destData) {
    destinations = destData.destinations;
  },

  matchTripsToDestinations() {
    traveler.trips.forEach(trip => {
      let matchedDest = destinations.find(dest => dest.id === trip.destinationID);
      trip.destination = matchedDest.destination;
      trip.estimatedLodgingCostPerDay = matchedDest.estimatedLodgingCostPerDay;
      trip.estimatedFlightCostPerPerson = matchedDest.estimatedFlightCostPerPerson;
      trip.image = matchedDest.image;
      trip.alt = matchedDest.alt;
    })
    domUpdates.displayTripCards(traveler.trips);
    this.calculateYearlySpent(traveler.trips);
  },

  calculateYearlySpent(trips) {
    const costWithoutFee = trips.reduce((sum, trip) => {
      sum += (trip.travelers * trip.estimatedFlightCostPerPerson)
            + (trip.duration * trip.estimatedLodgingCostPerDay)
      return sum
    }, 0);
    const costPlusFee = costWithoutFee * 1.1;
    domUpdates.displayAmountSpentThisYear(costPlusFee.toFixed(2));
  }
}
