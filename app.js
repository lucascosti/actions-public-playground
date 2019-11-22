var express = require('express');
var app = express();app.get('/', function (req, res) {
  res.send('Hello World! Everything is awesome!!');
});app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// export the app so we can include it in your tests.
module.exports = app