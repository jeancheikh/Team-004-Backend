const mongoose  = require('mongoose');
const Crs       = mongoose.model('Course');

const coursesList = (req, res) => {
  res.status(200).json({"status" : "success"});  
};

const coursesCreate = (req, res) => {
  res.status(200).json({"status" : "success"});
};

const coursesReadOne = (req, res) => {
  Crs
    .findById(req.params.courseId)
    .exec((err, course) => {
      if (!course) {
        return res.status(404).json({ "message" : "Course not found"})
      } else if (err) {
        return res.status(404).json(err)
      }
      res.status(200).json(course);
    });
};

const coursesUpdateOne = (req, res) => {
  res.status(200).json({"status" : "success"});
};

const coursesDeleteOne = (reg, res) => {
  res.status(200).json({"status" : "success"});
};

module.exports = {
  coursesList,
  coursesCreate,
  coursesReadOne,
  coursesUpdateOne,
  coursesDeleteOne
}


