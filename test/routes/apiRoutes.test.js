var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.test');
var db = require('./../models');
var expect = chai.expect;

chai.use(chaiHttp);

var request;

describe('GET /api/books', () => {
  beforeEach(() => {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it('should find all books', done => {
    db.Book.bulkCreate([
      {
        title: `The Handmaid's Tale`,
        author: `Margaret Atwood`,
        genres: `Speculative Fiction`,
        isbn: 9123137283124,
        coverimg: `www.image.com/kjhasdfasfd`
      },
      {
        title: `Cat's Eye`,
        author: `Margaret Atwood`,
        genres: `Fiction`,
        isbn: 91231372845644,
        coverimg: `www.image.com/ertagdvx`
      }
    ]).then(() => {
      request.get('/api/books').end((err, res) => {
        var resStatus = res.status;
        var resBody = res.body;

        expect(err).to.be.null;

        expect(resStatus).to.equal(200);

        expect(resBody)
          .to.be.an('array')
          .that.has.lengthOf(2);

        expect(responseBody[0])
          .to.be.an('object')
          .that.includes({
            title: `The Handmaid's Tale`,
            author: `Margaret Atwood`,
            genres: `Speculative Fiction`,
            isbn: 9123137283124,
            coverimg: `www.image.com/kjhasdfasfd`
          });

        expect(responseBody[1])
          .to.be.an('object')
          .that.includes({
            title: `Cat's Eye`,
            author: `Margaret Atwood`,
            genres: `Fiction`,
            isbn: 91231372845644,
            coverimg: `www.image.com/ertagdvx`
          });
        done();
      });
    });
  });
});

module.exports = function(app) {
  app.get('/api/books', function(req, res) {
    db.Book.findAll({}).then(dbBooks => {
      res.json(dbBooks);
    });
  });

  app.post('/api/books', function(req, res) {
    console.log(req.body);
    db.Book.create({
      title: req.body.title,
      author: req.body.author,
      genres: req.body.genres,
      isbn: req.body.isbn,
      coverimg: req.body.coverimg,
      pubDate: req.body.pubDate
    }).then(function(dbBook) {
      res.json(dbBook);
    });
  });

  app.put('/api/books', function(req, res) {
    db.Book.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbBook) {
      res.json(dbBook);
    });
  });

  app.delete('/api/books/:id', (req, res) => {
    db.Book.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbBook => {
      res.json(dbTodo);
    });
  });
};
