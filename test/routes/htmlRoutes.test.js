var path = require('path');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
  app.get('/search', function(req, res) {
    res.sendFile(path.join(__dirname, './../public/search.html'));
  });
  app.get('/library', function(req, res) {
    res.sendFile(path.join(__dirname, './../public/Library.html'));
  });
};
