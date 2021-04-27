import chai from "chai";
import TripsRepo from "../src/TripsRepo.js";
const expect = chai.expect;
import testTrips from "./sampledata/test-trips.js";

let tripsRepo;

describe("Trips Repo", () => {
  beforeEach(() => {
    tripsRepo = new TripsRepo(testTrips);
  });

  it("should be a function", () => {
    expect(TripsRepo).to.be.a("function");
  });

  it("should be an instance of TripsRepo", () => {
    expect(tripsRepo).to.be.an.instanceOf(TripsRepo);
  });

  it("should instantiate with an array of all trip objects", () => {
    expect(tripsRepo.allTrips).to.be.an("array");
    expect(tripsRepo.allTrips).to.have.lengthOf(10);
    expect(tripsRepo.allTrips[0].id).to.equal(41);
    expect(tripsRepo.allTrips[9].id).to.equal(50);
  });

  it("should be able to change status of old trips to completed", () => {
    expect(tripsRepo.allTrips[0].status).to.equal("approved");
    expect(tripsRepo.allTrips[9].status).to.equal("approved");

    tripsRepo.completeOldTrips();

    expect(tripsRepo.allTrips[0].status).to.equal("completed");
    expect(tripsRepo.allTrips[9].status).to.equal("completed");
  });
})