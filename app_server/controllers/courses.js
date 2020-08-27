/* Get 'home' page */
const homeList = (req, res) => {
  res.render('index', {title: 'Home'});
};

/* Get 'Course Details' page */
const courseDetail = (req, res) => {
  res.render('index', {title: 'Course Details'});
};


/* Get 'Add review' page */
const addReview = (req, res) => {
  res.render('index', {title: 'Add review'});
};

module.exports = {
  homeList,
  courseDetail,
  addReview
}
