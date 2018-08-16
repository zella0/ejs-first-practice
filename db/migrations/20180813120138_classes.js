
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Classes', (table)=>{
    table.increments(); // id
    table.string("class_name"); //
    table.string("class_location");
    table.integer("class_size");
    table.integer("class_duration");
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Classes');
};
