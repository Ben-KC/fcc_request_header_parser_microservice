var express = require('express');
var app = express();

//set port
app.set('port', (process.env.PORT || 8080));

//handle get
app.get('/', function(req, res) {

});

app.listen(app.get(port));
