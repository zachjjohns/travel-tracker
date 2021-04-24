const tripsContainer = document.querySelector('.trips-container')

let domUpdates = {
  greetUser(traveler) {
    const greeting = document.querySelector('.greeting');
    greeting.innerText = `Howdy, ${traveler.name}!`;
  },

  displayTripCards(trips) {
    tripsContainer.innerHTML = '';
    trips.forEach(trip => {
      tripsContainer.innerHTML += 
      `<section class="card" id=${trip.id}>
        <div class="destination-image" style="background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${trip.image}); background-size: cover" alt="${trip.alt}">
          <div class="party-container">
            <p class="party-title">Travelers</p>
            <p class="party-count">${trip.travelers}</p>
          </div>
        </div>
        <div class="bottom-card-container">
          <h4 class="trip-name">${trip.destination}</h4>
          <p class="trip-date">${trip.date}</p>
          <p class="duration-title">Duration</p>
          <p class="duration-time">${trip.duration}</p>
        </div>
      </section>`
    })
  },

  displayAmountSpentThisYear(amountTotal) {
    const amountSpentLine = document.querySelector('.amount-spent');
    amountSpentLine.innerText = `You've spent $${amountTotal} this year.`
  }
}

export default domUpdates;