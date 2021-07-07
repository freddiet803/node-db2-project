exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('cars').insert([
        {
          VIN: '12NGH74748393R',
          Make: 'Ford',
          Model: 'Mustang',
          Mileage: 54000
        },

        { VIN: '1ZER343585TTK', Make: 'Ford', Model: 'Taurus', Mileage: 99000 },

        {
          VIN: '1UTYGHF84748',
          Make: 'Ford',
          Model: 'F-150',
          Mileage: 8000,
          Transmission: 'Manual',
          Title: 'Salvage'
        }
      ]);
    });
};
