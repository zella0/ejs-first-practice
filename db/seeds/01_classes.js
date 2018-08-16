
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('Classes').insert([
        {class_name: "Web Development g96", class_location: "Pima", class_size: 10, class_duration: 6},
        {class_name: "Web Development g97", class_location: "Cocochino", class_size: 8, class_duration: 6},
        {class_name: "Web Development g98", class_location: "Pinal", class_size: 7, class_duration: 6},
        {class_name: "Data Science g72", class_location: "Salt River", class_size: 13, class_duration: 6},
        {class_name: "Web Development g100", class_location: "Cactus", class_size: 15, class_duration: 6},
        {class_name: "Data Science g73", class_location: "Sunset", class_size: 12, class_duration: 6}
      ]);
    });
};
