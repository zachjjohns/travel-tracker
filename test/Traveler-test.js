import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/Traveler.js'

let sampleTraveler, sampleTrips, traveler

describe('Traveler', () => {
  beforeEach(() => {
    sampleTraveler = {
      "id": 49,
      "name": "Guthry Tute",
      "travelerType": "thrill-seeker",
    };
    sampleTrips = [
      {
        "id": 41,
        "userID": 3,
        "destinationID": 25,
        "travelers": 3,
        "date": "2020/08/30",
        "duration": 11,
        "status": "approved",
        "suggestedActivities": []
      }, {
        "id": 42,
        "userID": 11,
        "destinationID": 32,
        "travelers": 1,
        "date": "2020/08/08",
        "duration": 14,
        "status": "approved",
        "suggestedActivities": []
      }, {
        "id": 43,
        "userID": 50,
        "destinationID": 42,
        "travelers": 4,
        "date": "2021/01/09",
        "duration": 5,
        "status": "approved",
        "suggestedActivities": []
      }, {
        "id": 44,
        "userID": 27,
        "destinationID": 43,
        "travelers": 3,
        "date": "2020/09/12",
        "duration": 4,
        "status": "approved",
        "suggestedActivities": []
      }, {
        "id": 45,
        "userID": 45,
        "destinationID": 5,
        "travelers": 6,
        "date": "2020/09/06",
        "duration": 9,
        "status": "approved",
        "suggestedActivities": []
      }, {
        "id": 46,
        "userID": 44,
        "destinationID": 33,
        "travelers": 2,
        "date": "2020/08/24",
        "duration": 11,
        "status": "approved",
        "suggestedActivities": []
      }, {
        "id": 47,
        "userID": 28,
        "destinationID": 32,
        "travelers": 3,
        "date": "2019/12/10",
        "duration": 14,
        "status": "approved",
        "suggestedActivities": []
      }, {
        "id": 48,
        "userID": 44,
        "destinationID": 14,
        "travelers": 6,
        "date": "2021/02/10",
        "duration": 8,
        "status": "approved",
        "suggestedActivities": []
      }, {
        "id": 49,
        "userID": 45,
        "destinationID": 35,
        "travelers": 1,
        "date": "2020/05/14",
        "duration": 16,
        "status": "approved",
        "suggestedActivities": []
      }, {
        "id": 50,
        "userID": 3,
        "destinationID": 16,
        "travelers": 5,
        "date": "2020/07/02",
        "duration": 17,
        "status": "approved",
        "suggestedActivities": []
      }
    ];
    traveler = new Traveler(sampleTraveler);
    traveler.trips = sampleTrips;
  });

  it('should be an instance of Traveler', () => {
    expect(traveler).to.be.an.instanceOf(Traveler);
  });

  it('should instantiate with user details', () => {
    expect(traveler.id).to.equal(49);
    expect(traveler.name).to.equal("Guthry Tute");
    expect(traveler.travelerType).to.equal("thrill-seeker");
    expect(traveler.trips.length).to.equal(10);
  });
});
