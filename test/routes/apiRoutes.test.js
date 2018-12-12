var db = require('../models');

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
