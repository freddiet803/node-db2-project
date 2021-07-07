const express = require('express');
const db = require('./car-model.js');

const router = express.Router();

//get all cars

router.get('/', (req, res) => {
  db.get()
    .then(cars => {
      if (cars.length > 0) {
        res.status(200).json(cars);
      } else {
        res.status(400).json({ message: 'no cars in database' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'error getting cars from database' });
    });
});

//create a car

router.post('/', (req, res) => {
  const newCar = req.body;

  if (newCar.VIN && newCar.Make && newCar.Model && newCar.Mileage) {
    db.addCar(newCar)
      .then(added => {
        res
          .status(201)
          .json({ added: added, message: 'successfully added new car' });
      })
      .catch(err => {
        res.status(500).json({ errorMessage: 'could not add car to database' });
      });
  } else {
    res
      .status(400)
      .json({
        message:
          'Cars need to have VIN, Make, Model and Mileage fields populated'
      });
  }
});

module.exports = router;
