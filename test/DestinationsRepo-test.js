import chai from "chai";
const expect = chai.expect;
import DestinationsRepo from "../src/DestinationsRepo.js";
import testDestinations from "./sampledata/test-destinations.js";

let destinationsRepo;

describe("Destinations Repo", () => {
  beforeEach(() => {
    destinationsRepo = new DestinationsRepo(testDestinations);
  });

  it("should be a function", () => {
    expect(DestinationsRepo).to.be.a("function");
  });

  it("should be an instance of DestinationsRepo", () => {
    expect(destinationsRepo).to.be.an.instanceOf(DestinationsRepo);
  });

  it("should instantiate with an array of all destination objects", () => {
    expect(destinationsRepo.allDestinations).to.be.an("array");
    expect(destinationsRepo.allDestinations).to.have.lengthOf(6);
    expect(destinationsRepo.allDestinations[0].id).to.equal(43);
    expect(destinationsRepo.allDestinations[3].id).to.equal(14);
  });
})