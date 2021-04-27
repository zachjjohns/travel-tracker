const dayjs = require("dayjs");

class Traveler {
  constructor(userDetails) {
    this.id = userDetails.id;
    this.name = userDetails.name;
    this.travelerType = userDetails.travelerType;
    this.trips = [];
  }

  getMyTrips(tripsData) {
    this.trips = tripsData.filter(trip => trip.userID === this.id);
  }

  sortMyTrips() {
    this.trips = this.trips.sort((a, b) => dayjs(b.date) - dayjs(a.date));
  }

  getTripDetails(destinationData) {
    this.trips.forEach(trip => {
      let matchedDest = destinationData.find(dest => dest.id === trip.destinationID);
      trip.destination = matchedDest.destination;
      trip.estimatedLodgingCostPerDay = matchedDest.estimatedLodgingCostPerDay;
      trip.estimatedFlightCostPerPerson = matchedDest.estimatedFlightCostPerPerson;
      trip.image = matchedDest.image;
      trip.alt = matchedDest.alt;
    });
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
}

export default Traveler