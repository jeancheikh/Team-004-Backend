/* Get 'about' page */
const about = (req, res) => {
  res.render('index', {title: 'About Afriteach'})
};

module.exports = {
  about
};