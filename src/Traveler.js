const dayjs = require("dayjs");

class Traveler {
  constructor(userDetails) {
    this.id = userDetails.id;
    this.name = userDetails.name;
    this.travelerType = userDetails.travelerType;
    this.trips = [];
  }

  calculateYearlySpent() {
    const pastYear = dayjs().subtract(1, "year").format("YYYY/MM/DD");
    const costWithoutFee = this.trips.reduce((sum, trip) => {
      if (trip.date > pastYear) {
        sum += (trip.travelers * trip.estimatedFlightCostPerPerson)
          + (trip.duration * trip.estimatedLodgingCostPerDay);
      }
      return sum;
    }, 0);
    const costPlusFee = costWithoutFee * 1.1;
    return costPlusFee;
  }

  sortMyTrips() {
    this.trips = this.trips.sort((a, b) => dayjs(b.date) - dayjs(a.date));
  }
}

export default Traveler