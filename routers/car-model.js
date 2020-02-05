const db = require('../data/dbConfig.js');

module.exports = {
  get,
  addCar
};

//get all cars
function get() {
  return db('cars');
}

function addCar(car) {
  return db('cars').insert(car);
}
