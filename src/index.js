import './css/main.scss';
import {getTraveler, tripsData, destinationsData} from './API';
import Traveler from './Traveler.js'
import domUpdates from './domUpdates';

const destinationsDropdown = document.querySelector("#destinationsDropdown");
const requestButton = document.querySelector('#requestTrip');
const calculateCostButton = document.querySelector('#calculateCost');
const submitRequestButton = document.querySelector('#submitRequest');
const departDate = document.querySelector("#departDate");
const tripDuration = document.querySelector("#tripDuration");
const numTravelers = document.querySelector("#numTravelers");
const tripCostLine = document.querySelector("#tripCost");

window.addEventListener('load', getData(9));
requestButton.addEventListener('click', displayRequest);
departDate.addEventListener('change', buttonEnabler);
tripDuration.addEventListener('change', buttonEnabler);
numTravelers.addEventListener('change', buttonEnabler);
calculateCostButton.addEventListener('click', calculateTripCost);
submitRequestButton.addEventListener('click', submitTripRequest);

let traveler, destinations, allTrips;

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
    allTrips = tripsData.trips;
    traveler.trips = tripsData.trips.filter(trip => trip.userID === traveler.id);
  },

  setDestinations(destData) {
    destinations = destData.destinations;
    domUpdates.displayDestinationDropdown(destinations);
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

function displayRequest() {
  if (requestButton.innerText === "Return to Trips") {
    getData(traveler.id);
  }
  domUpdates.displayRequestForm();
}

function buttonEnabler() {
  if (departDate.value && tripDuration.value && numTravelers.value) {
    calculateCostButton.disabled = false;
    submitRequestButton.disabled = false;
  }
}

function calculateTripCost() {
  event.preventDefault();
  let matchedDest = destinations.find(dest => dest.id === parseInt(destinationsDropdown.value));
  let tripCost = (numTravelers.value * matchedDest.estimatedFlightCostPerPerson
                 + tripDuration.value * matchedDest.estimatedLodgingCostPerDay) * 1.1;
  tripCostLine.innerText = `This trip will cost a total of $${tripCost.toFixed(2)}.`        
}

function submitTripRequest() {
  event.preventDefault();
  postTripRequest();
}

function postTripRequest() {
  fetch("http://localhost:3001/api/v1/trips", {
    method: 'POST',
    body: JSON.stringify({
      "id": parseInt(allTrips.length + 1),
      "userID": parseInt(traveler.id),
      "destinationID": parseInt(destinationsDropdown.value),
      "travelers": parseInt(numTravelers.value),
      "date": formatDate(departDate.value),
      "duration": parseInt(tripDuration.value),
      "status": "pending",
      "suggestedActivities": []
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => traveler.trips.push(data))
    .then(alert("Trip request submitted! An agent will be in contact with you."))
    .catch(err => console.log(`POST Error: ${err.message}`))
}

function formatDate(dateValue) {
  let splitDate = dateValue.split('-');
  let joinedDate = splitDate.join('/');
  return joinedDate
}