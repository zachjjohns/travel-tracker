class Trip {
  constructor(tripData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.travelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = [];
    this.destination = tripData.destination;
    this.estimatedLodgingCostPerDay = tripData.estimatedLodgingCostPerDay;
    this.estimatedFlightCostPerPerson = tripData.estimatedFlightCostPerPerson;
    this.image = tripData.image;
    this.alt = tripData.alt;
  }
}

export default Trip;