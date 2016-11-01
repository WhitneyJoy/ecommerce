var express = require("express");
var bodyParser = require('body-parser');
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://whitneyseybold1@host:5432/whitneyseybold1");

var app = express();

app.use('/', express.static(__dirname + '/public'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/products', function (req, res) {
  let allData = req.query.id;
  db.one('SELECT * FROM "products" WHERE "id" = $1')
  .then(function (result) {
    res.send(result);
  })
  .catch(function (error) {
    res.status(404).send('Did not find item ' + id);
  });
});



app.post('/order', function (req, res) {
  // db.query('INSERT INTO order ("id", "productId", "timestamp", "productName") VALUES ${id}, ${productId}, ${timestamp}, ${productName}) RETURNING "productName"',
  db.one('SELECT * FROM "products" WHERE "id" = $1')
  .then(function (data) {
    console.log(data);
    var id = data.productId;
    res.send({
      status: 'posted',
      id: id
    });
  })
    .catch(function (error) {
      res.status(404).send('Did not find item ' + id);
    });
  });


app.listen(3000, function () {
  console.log('See this website at localhost:3000');
});
