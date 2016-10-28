var express = require("express");
var bodyParser = require('body-parser')

var app = express();

app.use('/', express.static(__dirname + '/public'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/api/data', function (req, res) {
  let data = "Data posted";
  // get data from some source.... api or db
  console.log("got data");
  res.send(data);
});

app.post('/api/data', function (req, res) {
  let theInfoWePosted = req.body.firstName;
  //sending the id of the item and you want item to be sent to the cart table
  res.render(order.html);
});


app.listen(3000, function () {
  console.log('See this website at localhost:3000');
});
