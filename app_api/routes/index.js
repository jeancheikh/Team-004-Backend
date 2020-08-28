dotenv            = require('dotenv');
dotenv.config();
const express     = require('express');
const router      = express.Router();
const jwt         = require('express-jwt');
const auth        = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256']
});
const ctrlCourses = require('../controllers/courses');
const ctrlReviews = require('../controllers/reviews');
const ctrlAuth    = require('../controllers/authentication');

// Courses
router
  .route('/courses')
  .get(ctrlCourses.coursesList)
  .post(auth, ctrlCourses.coursesCreate);

router
  .route('/courses/:courseId')
  .get(ctrlCourses.coursesReadOne)
  .put(auth, ctrlCourses.coursesUpdateOne)
  .delete(auth, ctrlCourses.coursesDeleteOne)

// Reviews


// Authentication
router
  .post('/register', ctrlAuth.register);

router
  .post('/login', ctrlAuth.login);


module.exports = router;