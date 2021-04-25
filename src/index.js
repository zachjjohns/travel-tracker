import './css/main.scss';
import {getTraveler, tripsData, destinationsData} from './API';
import dayjs from 'dayjs';
import Traveler from './Traveler.js'
import domUpdates from './domUpdates';

const requestButton = document.querySelector('.request-trip');
const tripsContainer = document.querySelector('.trips-container');
const requestForm = document.querySelector('.request-form');

let traveler, destinations

window.addEventListener('load', getData(9));
requestButton.addEventListener('click', displayRequestForm);

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
    getAnnualSpent();
  },
}

function getAnnualSpent() {
  const cost = traveler.calculateYearlySpent(traveler.trips);
  domUpdates.displayAmountSpentThisYear(cost.toFixed(2));
}

function displayRequestForm() {
  tripsContainer.classList.toggle("hidden");
  requestForm.classList.toggle("hidden");
  if (requestButton.innerText === "Request a Trip!") {
    requestButton.innerText = "Return to Trips";
  } else {
    requestButton.innerText = "Request a Trip!";
  }
}

// function submitTripRequest() {
//    return fetch("http://localhost:3001/api/v1/trips", {
//       method: 'POST',
//       headers: {
//             'Content-Type': 'application/json'
//         },
//       body: JSON.stringify({
//         id: ,
//         userID: ,
//         destinationID: ,
//         travelers: ,
//         date: ,
//         duration: ,
//         status: "pending",
//         suggestedActivites: []
//       }))
//     .then(response => response.json())
//     .then(data => data)
//     .catch(err => console.log(`POST Error: ${err.message}`))
// }