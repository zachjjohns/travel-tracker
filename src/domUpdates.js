let domUpdates = {
  greetUser(traveler) {
    const greeting = document.querySelector('.greeting');
    greeting.innerText = `Howdy, ${traveler.name}!`;
  }

  // displayTripCards(trips) {

  // }
}

export default domUpdates;