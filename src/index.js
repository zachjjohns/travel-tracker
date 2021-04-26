import "./css/main.scss";
import {getTraveler, travelersData, tripsData, destinationsData} from "./API";
import Traveler from "./Traveler";
import TripsRepo from "./TripsRepo";
import DestinationsRepo from "./DestinationsRepo";
import domUpdates from "./domUpdates";

const destinationsDropdown = document.querySelector("#destinationsDropdown");
const requestButton = document.querySelector("#requestTrip");
const calculateCostButton = document.querySelector("#calculateCost");
const submitRequestButton = document.querySelector("#submitRequest");
const departDate = document.querySelector("#departDate");
const tripDuration = document.querySelector("#tripDuration");
const numTravelers = document.querySelector("#numTravelers");
const tripCostLine = document.querySelector("#tripCost");
const loginUser = document.querySelector("#loginUser");
const loginPassword = document.querySelector("#loginPassword");
const loginSubmitButton = document.querySelector("#loginSubmit");
const loginPage = document.querySelector("#loginPage");
const travelerDetails = document.querySelector("#travelerDetails");
const tripsContainer = document.querySelector("#tripsContainer");

window.addEventListener("load", getData(1));
requestButton.addEventListener("click", displayRequest);
departDate.addEventListener("change", buttonEnabler);
tripDuration.addEventListener("change", buttonEnabler);
numTravelers.addEventListener("change", buttonEnabler);
calculateCostButton.addEventListener("click", calculateTripCost);
submitRequestButton.addEventListener("click", submitTripRequest);
loginSubmitButton.addEventListener("click", checkLogin);

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
    traveler.trips = tripsData.trips.filter(trip => trip.userID === traveler.id);
    traveler.sortMyTrips();
  },

  setDestinations(destData) {
    destinations = new DestinationsRepo(destData.destinations);
    domUpdates.displayDestinationDropdown(destinations.allDestinations);
  },

  matchTripsToDestinations() {
    traveler.trips.forEach(trip => {
      let matchedDest = destinations.allDestinations.find(dest => dest.id === trip.destinationID);
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
    method: "POST",
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
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => traveler.trips.push(data))
    .then(alert("Trip request submitted! An agent will be in contact with you."))
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
    loginPage.classList.add("hidden");
    requestButton.classList.remove("hidden");
    travelerDetails.classList.remove("hidden");
    tripsContainer.classList.remove("hidden");
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