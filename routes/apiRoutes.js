var db = require('../models');

module.exports = function(app) {
  app.get('/', function(req,res) {
    db.getMethod.queryMethod()
  }).then(function() {
    res.render()
  });

  app.post('/api/books', function(req,res) {
    db.postMethod.queryMethod()
  }).then(function() {
    res.json()
  });

  app.delete('api/books/:id', function(req,res) {
    db.deleteMethod.queryMethod()
  }).then(function() {
    res.json()
  });

  app.put('api/books', function(req,res) {
    db.putMethod.queryMethod()
  }).then(function() {
    res.json()
  });
};