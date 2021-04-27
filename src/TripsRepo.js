const dayjs = require("dayjs");

class TripsRepo {
  constructor(tripData) {
    this.allTrips = tripData;
  }

  completeOldTrips() {
    let today = dayjs().format("YYYY/MM/DD");
    this.allTrips.forEach(trip => {
      if (trip.date < today) {
        trip.status = "completed";
      }
    })
  }
}

export default TripsRepo;