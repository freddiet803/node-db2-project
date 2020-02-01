exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl
      .text('VIN', 128)
      .unique()
      .notNullable();
    tbl.text('Make', 128).notNullable();
    tbl.text('Model', 128).notNullable();
    tbl.integer('Mileage', 15).notNullable();
    tbl.text('Transmission', 128);
    tbl.text('Title Status', 128);
  });
};

exports.down = function(knex) {
  return knex.shema.dropTableIfExists('cars');
};
