var db = require('../models');

module.exports = function(app) {
  app
    .get('/api/books', function(req, res) {
      db.Book.findAll({}).then(() => {});
    })
    .then(function(dbBook) {
      res.json(dbBook);
    });

  app
    .post('/api/books', function(req, res) {
      console.log(req.body);
      db.Book.create();
    })
    .then(function() {
      res.json();
    });

  app
    .delete('api/books/:id', function(req, res) {
      db.deleteMethod.queryMethod();
    })
    .then(function() {
      res.json();
    });

  app
    .put('api/books', function(req, res) {
      db.putMethod.queryMethod();
    })
    .then(function() {
      res.json();
    });
};
