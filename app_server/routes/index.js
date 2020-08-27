const express = require('express');
const router = express.Router();
const ctrlOther  = require('../controllers/other');
const ctrlCourses = require('../controllers/courses');


/* Courses Pages */
router.get('/', ctrlCourses.homeList);
router.get('/course', ctrlCourses.courseDetail);
router.get('/course/review/new', ctrlCourses.addReview);

/* GET home page. */
router.get('/about', ctrlOther.about);

module.exports = router;
