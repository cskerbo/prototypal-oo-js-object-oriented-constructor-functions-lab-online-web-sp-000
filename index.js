function Scooter(year, color, model) {
  return {
    year,
    color,
    model
  }
}
let newScooter = new Scooter('1984', 'blue', 'Honda');

function Driver(name, age, experience) {
  return {
    name,
    age,
    experience
  }
}

function PickupLocation(address, city) {
  return {
    address,
    city
  }
}
