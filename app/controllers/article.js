var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article'),
  posts = require('../../config/posts');

  module.exports = function (app) {
    app.use('/article',router);
  };

  router.get('/', function (req, res, next) {
  
    Article.find({}, function(err, articles){
        res.render('article/list', { 
          title: 'BDW - Blog',
          articles: articles
        });
    });
  });

router.get('/:id', function (req, res, next) {

  var id = req.params.id;

    Article.findOne({ _id: id }, function(err, article){

      res.render('article/show', {
          title: 'BDW - Blog',
          article: article 
        });
    });
});

router.get('/:id/edit', function (req, res, next){

  var id = req.params.id;

  Article.findOne({ _id: id }, function(err, article){

    res.render('article/edit', {
      title: 'BDW - Blog',
      article: article
    });
  });
});

router.post('/:id', function (req, res, next){

  var id = req.params.id;
  console.log(req.body);

  Article.findOneAndUpdate({ _id: id }, req.body, function(err, article){
    console.log(article);
    if(err) return next(err)
      res.redirect('back');
  });
});

router.get('/bootstrap', function (req, res, next){
  Article.create(posts.posts, function(err, articles){

      if(err) return next(err);
      res.send(articles);
  });
});

















// var express = require('express'),
//   router = express.Router(),
//   mongoose = require('mongoose'),
//   Article = mongoose.model('Article'),
//   posts = require('../../config/post');

// module.exports = function (app) {
//   app.use('/article', router);
// };

// router.get('/id', function (req, res, next) {
//   Article.findOne({}, function (err, articles) {
//     var id = req.params.id;
//     if (err) return next(err);
//     console.log('articles', articles);
//     res.render('article/list', {
//       title: 'Generator-Express MVC',
//       articles: articles
//     });
//   });
// });

// router.get('/:id/edit', function (req, res, next) {
//   Article.findOne({ _id: id }, function (err, articles) {
//     if (err) return next(err);
//     console.log('articles', articles);
//     res.send('article/show', {
//       title: 'Generator-Express MVC',
//       article: article
      
//     });
//   });
// });
