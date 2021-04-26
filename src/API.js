const checkForError = (response) => {
  if (!response.ok) {
    throw new Error('Something went wrong, please try again.');
  } else {
    return response.json();
  }
}

export function getTraveler(id) {
  return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    .then(response => checkForError(response))
    .catch(err => console.log(`Traveler API Error: ${err.message}`))
}

export function travelersData() {
  return fetch("http://localhost:3001/api/v1/travelers")
    .then(response => checkForError(response))
    .catch(err => console.log(`Travelers API Error: ${err.message}`))
}

export function tripsData() {
  return fetch("http://localhost:3001/api/v1/trips")
    .then(response => checkForError(response))
    .catch(err => console.log(`Trips API Error: ${err.message}`))
}

export function destinationsData() {
  return fetch("http://localhost:3001/api/v1/destinations")
    .then(response => checkForError(response))
    .catch(err => console.log(`Destinations API Error: ${err.message}`))
}
