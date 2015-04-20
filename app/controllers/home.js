var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});


router.get('/work', function (req, res, next) {
  res.render('index', {
      title: 'work',
    });
});


router.get('/portfolio', function (req, res, next) {
  res.render('index', {
      title: 'hello',
    });
});


router.get('/about', function (req, res, next) {
  res.render('index', {
      title: 'blah',
    });
});


router.get('/contact', function (req, res, next) {
  res.render('index', {
      title: 'blah',
    });
});