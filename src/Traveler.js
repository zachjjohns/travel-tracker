class Traveler {
  constructor(userDetails) {
    this.id = userDetails.id;
    this.name = userDetails.name;
    this.travelerType = userDetails.travelerType;
    this.trips = [];
  }

  // findMyTrips() {
  //   console.log(this.trips);
  //   let myTrips = this.trips.filter(trip => trip.userID === this.id);
  //   this.trips = myTrips;
  // }
}

export default Traveler