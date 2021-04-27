import chai from "chai";
const expect = chai.expect;
import Traveler from "../src/Traveler.js";
import testTraveler from "./sampledata/test-traveler.js";
import testTrips from "./sampledata/test-trips.js";
import testDestinations from "./sampledata/test-destinations.js";

let traveler, sampleTrips, sampleDestinations;

describe("Traveler", () => {
  beforeEach(() => {
    traveler = new Traveler(testTraveler);
    sampleTrips = testTrips;
    sampleDestinations = testDestinations;
  });

  it("should be a function", () => {
    expect(Traveler).to.be.a("function");
  });

  it("should be an instance of Traveler", () => {
    expect(traveler).to.be.an.instanceOf(Traveler);
  });

  it("should instantiate with an id", () => {
    expect(traveler.id).to.equal(49);
  });

  it("should instantiate with the traveler name", () => {
    expect(traveler.name).to.equal("Guthry Tute");
  });

  it("should instantiate with their travel type", () => {
    expect(traveler.travelerType).to.equal("thrill-seeker");
  });
  
  it("should be able to get trips that match ID", () => {
    traveler.getMyTrips(sampleTrips);
    expect(traveler.trips[0]).to.deep.equal(testTrips[3]);
  });

  it("should instantiate with the appropriate trips", () => {
    traveler.getMyTrips(sampleTrips);
    expect(traveler.trips.length).to.equal(4);
  });

  it("should be able to calculate amount spent in a year", () => {
    traveler.getMyTrips(sampleTrips);
    expect(traveler.calculateYearlySpent()).to.equal(26928.000000000004);
  });

  it("should be able to sort trips by date", () => {
    traveler.getMyTrips(sampleTrips);
    traveler.sortMyTrips();
    expect(traveler.trips[0].date).to.equal("2021/02/10");
    expect(traveler.trips[3].date).to.equal("2020/08/24");
  });

  it("should add properties to its trips based on destination", () => {
    traveler.getMyTrips(sampleTrips);
    traveler.getTripDetails(sampleDestinations);
    expect(traveler.trips[0].destination).to.equal("Nassau, The Bahamas");
    expect(traveler.trips[1].estimatedLodgingCostPerDay).to.equal(150);
    expect(traveler.trips[2].estimatedFlightCostPerPerson).to.equal(110);
    expect(traveler.trips[3].image).to.equal("https://images.unsplash.com/photo-1517821362941-f7f753200fef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80");
    expect(traveler.trips[3].alt).to.equal("people buying oranges and other fruit from a street vendor");
  })
});
