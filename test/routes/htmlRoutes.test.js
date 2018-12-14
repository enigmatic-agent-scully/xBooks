var path = require('path');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.test');
var db = require('./../models');
var expect = chai.expect;

chai.use(chaiHttp);

var request;

describe('default route index.html', () => {
  it('should provide the index view name', done => {});
});

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
