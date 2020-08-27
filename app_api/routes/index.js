const express = require('express');
const router = express.Router();
const ctrlCourses = require('../controllers/courses');
const ctrlReviews = require('../controllers/reviews');
const ctrlAuth = require('../controllers/authentication');

// Courses
router
  .route('/courses')
  .get(ctrlCourses.coursesList)
  .post(ctrlCourses.coursesCreate);

router
  .route('/courses/:courseId')
  .get(ctrlCourses.coursesReadOne)
  .put(ctrlCourses.coursesUpdateOne)
  .delete(ctrlCourses.coursesDeleteOne)

// Reviews


// Authentication
router
  .post('/register', ctrlAuth.register);

router
  .post('/login', ctrlAuth.login);


module.exports = router;