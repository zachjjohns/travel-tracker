import "./css/main.scss";
import {getTraveler, travelersData, tripsData, destinationsData} from "./API";
import Traveler from "./Traveler";
import TripsRepo from "./TripsRepo";
import DestinationsRepo from "./DestinationsRepo";
import domUpdates from "./domUpdates";

const calculateCostButton = document.querySelector("#calculateCost");
const departDate = document.querySelector("#departDate");
const destinationsDropdown = document.querySelector("#destinationsDropdown");
const loginPassword = document.querySelector("#loginPassword");
const loginSubmitButton = document.querySelector("#loginSubmit");
const loginUser = document.querySelector("#loginUser");
const numTravelers = document.querySelector("#numTravelers");
const requestButton = document.querySelector("#requestTrip");
const submitRequestButton = document.querySelector("#submitRequest");
const tripCostLine = document.querySelector("#tripCost");
const tripDuration = document.querySelector("#tripDuration");

window.addEventListener("load", getData(1));

calculateCostButton.addEventListener("click", calculateTripCost);
departDate.addEventListener("change", buttonEnabler);
loginSubmitButton.addEventListener("click", checkLogin);
numTravelers.addEventListener("change", buttonEnabler);
requestButton.addEventListener("click", displayRequest);
submitRequestButton.addEventListener("click", submitTripRequest);
tripDuration.addEventListener("change", buttonEnabler);

let traveler, allTravelers, destinations, allTrips;

function getData(id) {
  Promise.all([getTraveler(id), travelersData(), tripsData(), destinationsData()])
    .then(data => {
      dataSetter.setTraveler(data[0]);
      dataSetter.setAllTravelers(data[1]);
      dataSetter.setTrips(data[2], data[0]);
      dataSetter.setDestinations(data[3]);
      dataSetter.matchTripsToDestinations();
    })
}

let dataSetter = {
  setTraveler(travelerData) {
    traveler = new Traveler(travelerData);
    domUpdates.greetUser(traveler);
  },

  setAllTravelers(travelersData) {
    allTravelers = travelersData.travelers;
  },

  setTrips(tripsData) {
    allTrips = new TripsRepo(tripsData.trips);
    allTrips.completeOldTrips();
    traveler.getMyTrips(tripsData.trips);
    traveler.sortMyTrips();
  },

  setDestinations(destData) {
    destinations = new DestinationsRepo(destData.destinations);
    domUpdates.displayDestinationDropdown(destinations.allDestinations);
  },

  matchTripsToDestinations() {
    traveler.getTripDetails(destinations.allDestinations);
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
  tripCostLine.innerText = 
  `This trip will cost a total of $${destinations.getTripCost().toFixed(2)}.`;      
}

function submitTripRequest() {
  event.preventDefault();
  postTripRequest();
}

function postTripRequest() {
  fetch("http://localhost:3001/api/v1/trips", {
    method: "POST",
    body: JSON.stringify({
      "id": Date.now(),
      "userID": parseInt(traveler.id),
      "destinationID": parseInt(destinationsDropdown.value),
      "travelers": parseInt(numTravelers.value),
      "date": formatDate(departDate.value),
      "duration": parseInt(tripDuration.value),
      "status": "pending",
      "suggestedActivities": []
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(response => console.log(response))
    .then(data => traveler.trips.push(data))
    .then(tripCostLine.innerText = "Trip request submitted! An agent will be in contact with you.")
    .catch(err => console.log(`POST Error: ${err.message}`))
}

function formatDate(dateValue) {
  let splitDate = dateValue.split("-");
  let joinedDate = splitDate.join("/");
  return joinedDate
}

function checkLogin() {
  event.preventDefault();
  if (checkUsername() && loginPassword.value === "travel2020") {
    getData(traveler.id);
    domUpdates.displayMainPage(); 
  } else {
    alert("Invalid username and/or password. Please try again.")
  }
}

function checkUsername() {
  if (loginUser.value.split("traveler")[1]) {
    const id = parseInt(loginUser.value.split("traveler")[1]);
    traveler.id = id;
    return allTravelers.find(trav => trav.id === id);
  }
}