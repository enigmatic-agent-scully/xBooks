require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;
var app = express();
var db = require('./../models');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routes/apiRoutes.test')(app);
require('./routes/htmlRoutes.test')(app);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`app now listening at http://localhost:${PORT}`);
  });
});
