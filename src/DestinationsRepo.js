class DestinationsRepo {
  constructor(destinationData) {
    this.allDestinations = destinationData;
  }

  getTripCost() {
    const destinationsDropdown = document.querySelector("#destinationsDropdown");
    const numTravelers = document.querySelector("#numTravelers");
    const tripDuration = document.querySelector("#tripDuration");
    let matchedDest = this.allDestinations.find(dest => dest.id === parseInt(destinationsDropdown.value));
    let tripCost = (numTravelers.value * matchedDest.estimatedFlightCostPerPerson
                 + tripDuration.value * matchedDest.estimatedLodgingCostPerDay) * 1.1;
    return tripCost;
  }
}

export default DestinationsRepo;