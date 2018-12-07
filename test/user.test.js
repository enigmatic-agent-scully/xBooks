var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var db = require('../models');
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe('GET /api/users', function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function(done) {
    request = chai.request(server);
    db.sequelize.sync({ force: true }).then(function() {
      done();
    });
  });

  it('should find all examples', function(done) {
    // Add some examples to the db to test with
    db.User.bulkCreate([
      { username: 'afds654', name: 'AJ', password: 'xxxxxxx' },
      { username: 'wueyr890', name: 'BJ', password: 'xxxxxxx' }
    ]).then(function() {
      // Request the route that returns all examples
      request.get('/api/users').end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an('array')
          .that.has.lengthOf(2);

        expect(responseBody[0])
          .to.be.an('object')
          .that.includes({
            username: 'afds654',
            name: 'AJ',
            password: 'xxxxxxx'
          });

        expect(responseBody[1])
          .to.be.an('object')
          .that.includes({
            username: 'wueyr890',
            name: 'BJ',
            password: 'xxxxxxx'
          });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});
