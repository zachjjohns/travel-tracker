class Traveler {
  constructor(userDetails) {
    this.id = userDetails.id;
    this.name = userDetails.name;
    this.travelerType = userDetails.travelerType;
    this.trips = [];
  }

  calculateYearlySpent() {
    const costWithoutFee = this.trips.reduce((sum, trip) => {
      sum += (trip.travelers * trip.estimatedFlightCostPerPerson)
          + (trip.duration * trip.estimatedLodgingCostPerDay);
      return sum;
    }, 0);
    const costPlusFee = costWithoutFee * 1.1;
    return costPlusFee;
  }
}

export default Traveler