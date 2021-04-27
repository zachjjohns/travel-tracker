const travelerContainer = document.querySelector("#travelerDetails")
const tripsContainer = document.querySelector("#tripsContainer");
const requestContainer = document.querySelector("#requestContainer");
const destinationsDropdown = document.querySelector("#destinationsDropdown");
const requestButton = document.querySelector("#requestTrip");
const departDate = document.querySelector("#departDate");

let domUpdates = {
  greetUser(traveler) {
    const greeting = document.querySelector("#greeting");
    greeting.innerText = `Howdy, ${traveler.name}!`;
  },

  displayTripCards(trips) {
    tripsContainer.innerHTML = "";
    trips.forEach(trip => {
      tripsContainer.innerHTML += 
      `<section class="card" id=${trip.id}>
        <div class="destination-image" style=
        "background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), 
        url(${trip.image}); background-size: cover" alt="${trip.alt}">
          <div class="party-container">
          <p class="party-title">Travelers</p>
          <p class="party-count">${trip.travelers}</p>
          </div>
        </div>
        <div class="bottom-card-container">
          <h4 class="trip-name">${trip.destination}</h4>
          <p class="trip-date">${trip.date}</p>
          <p class="duration-title">Duration</p>
          <p class="duration-time">${trip.duration} days</p>
          <p class="trip-status">Status: ${trip.status}</p>
        </div>
      </section>`
    })
  },

  displayAmountSpentThisYear(amountTotal) {
    const amountSpentLine = document.querySelector(".amount-spent");
    amountSpentLine.innerText = `You've spent $${amountTotal} this year.`
  },

  displayRequestForm() {
    travelerContainer.classList.toggle("hidden");
    tripsContainer.classList.toggle("hidden");
    requestContainer.classList.toggle("hidden");
    this.setMinimumDate();
    if (requestButton.innerText === "Request a Trip!") {
      requestButton.innerText = "Return to Trips";
    } else {
      requestButton.innerText = "Request a Trip!";
    }
  },

  displayDestinationDropdown(destinationsData) {
    destinationsData.map(dest => {
      destinationsDropdown.innerHTML += 
      `<option value="${dest.id}">${dest.destination}</option>`
    })
  },

  setMinimumDate() {
    let today = new Date();
    let minDate = today.toISOString().substring(0, 10);
    departDate.setAttribute("min", minDate);
  }
}

export default domUpdates;