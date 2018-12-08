const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../public/js');
const expect = chai.expect;

chai.use(chaiHttp);

var request;

describe('API', function() {
  it('should add users', function(done) {
    API.addUser.bulkCreate([
      { username: 'afds654', name: 'AJ', password: 'xxxxxxx' },
      { username: 'wueyr890', name: 'BJ', password: 'xxxxxxx' }
    ]).then(function() {
      var responseBody = res.body;  
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
      done();
    });
  });
});