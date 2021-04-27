import chai from "chai";
const expect = chai.expect;
import Traveler from "../src/Traveler.js"
import testTraveler from "./sampledata/test-traveler.js"
import testTrips from "./sampledata/test-trips.js"

let traveler, sampleTrips;

describe("Traveler", () => {
  beforeEach(() => {
    traveler = new Traveler(testTraveler);
    sampleTrips = testTrips;
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
});
