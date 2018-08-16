exports.up = function(knex, Promise) {
  return knex.schema.createTable('Students', (table)=>{
    table.increments(); // id
    table.string("student_name");
    table.integer("student_age");
    table.string("student_email");
    table.integer('student_class_by_id')
        .notNullable()
        .references('id')
        .inTable('Classes')
        .onDelete('CASCADE')
        .index();
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Students');
};
