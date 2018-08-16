
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Students').del()
    .then(function () {
      // Inserts seed entries
      return knex('Students').insert([
        {student_name: "Nhan", student_age: 23, student_email: "asdf@hotmail.com", student_class_by_id: 1},
        {student_name: "Chelsea", student_age: 25, student_email: "zxc@gmail.com", student_class_by_id: 1},
        {student_name: "Lauren", student_age: 24, student_email: "qwe@yahoo.com", student_class_by_id: 1},
        {student_name: "Jake", student_age: 27, student_email: "rty@bing.com", student_class_by_id: 1},
        {student_name: "Seth", student_age: 27, student_email: "dfg@AOL.com", student_class_by_id: 1},
        {student_name: "Albert", student_age: 30, student_email: "cvb@twmail.com", student_class_by_id: 1},
        {student_name: "Elijah", student_age: 28, student_email: "jkl@AOL.com", student_class_by_id: 1},
        {student_name: "Todd", student_age: 19, student_email: "iop@gmail.com", student_class_by_id: 1},
        {student_name: "A", student_age: 18, student_email: "A@A.com", student_class_by_id: 2},
        {student_name: "B", student_age: 19, student_email: "B@B.com", student_class_by_id: 3},
        {student_name: "C", student_age: 20, student_email: "C@C.com", student_class_by_id: 4},
        {student_name: "D", student_age: 21, student_email: "D@D.com", student_class_by_id: 5},
        {student_name: "E", student_age: 22, student_email: "E@E.com", student_class_by_id: 6},
        {student_name: "F", student_age: 25, student_email: "F@F.com", student_class_by_id: 2},
        {student_name: "G", student_age: 27, student_email: "G@G.com", student_class_by_id: 3},
        {student_name: "H", student_age: 30, student_email: "H@H.com", student_class_by_id: 4},
        {student_name: "I", student_age: 33, student_email: "I@I.com", student_class_by_id: 5},
        {student_name: "J", student_age: 18, student_email: "J@J.com", student_class_by_id: 6},
        {student_name: "K", student_age: 21, student_email: "K@K.com", student_class_by_id: 2},
        {student_name: "L", student_age: 23, student_email: "E@E.com", student_class_by_id: 5}
      ]);
    });
};
