// setup knex to connect with our SQL server (postgres)
const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

// setup express for easier navigation via HTTP requests
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 8001;
app.use(bodyParser.urlencoded({
  extended: true
}));

// setup ejs
app.set('view engine', 'ejs');

// - As a user, when I visit '/' I see a list of all the classes and a form to create a new class.
app.get('/', function(req, res) {
  knex('Classes')
    .then((result) => {
      res.render('classes', {
        classes: result
      });
    })
});

// edit/delete
app.get('/update/:id', function(req, res) {
  knex('Classes')
    .where('Classes.id', req.params.id)
    .then((result) => {
      res.render('update_classes', {
        classes: result
      });
    })
})




// - As a user, when I submit the new class form I should see the new class displayed in the list.
app.post('/createClass', function(req, res) {
  knex('Classes')
    .insert({
      class_name: req.body.class_name,
      class_location: req.body.class_location,
      class_size: req.body.class_size,
      class_duration: req.body.class_duration
    })
    .then(() => {
      res.redirect('/');
    })
});

app.post('/update/:id', function(req, res) {
  knex('Classes')
    .where('Classes.id', req.params.id)
    .update({
      class_name: req.body.class_name,
      class_location: req.body.class_location,
      class_size: req.body.class_size,
      class_duration: req.body.class_duration
    })
    .then(() => {
      res.redirect('/');
    })
});

app.delete('/delete/:id', function(req, res) {
  knex('Classes')
    .where(req.params.id, 'Classes.id')
    .del()
    .then(()=>{
      res.redirect('/');
    });
})

// - As a user, when I click on a class it takes me to the individual class page.
// - As a user, when I view the class page I should see a list of all students in a class and a form to create a new student.
app.get('/:id', function(req, res) {
  knex('Classes')
    .join('Students', 'Students.student_class_by_id', '=', 'Classes.id')
    .where('Classes.id', req.params.id)
    .then((result) => {
      // console.log(result);
      let studentObj = {};
      let classObj = {};
      result.map((item) => {
        classObj = {
          class_id: item.id,
          class_name: item.class_name,
          class_location: item.class_location,
          class_duration: item.class_duration,
          students: []
        }
      })

      result.map((item) => {
        studentObj = {
          student_name: item.student_name,
          student_age: item.student_age,
          student_email: item.student_email
        }
        classObj.students.push(studentObj);
      })
      console.log(classObj);
      res.render('students', {
        classes: classObj
      });
    })
});

app.listen(port, function() {
  console.log('server is up on port ' + port)
})
