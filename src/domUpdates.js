let domUpdates = {
  greetUser(traveler) {
    const greeting = document.querySelector('.greeting');
    greeting.innerText = `Howdy, ${traveler.name}!`;
  }
}

export default domUpdates;