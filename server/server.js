var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes');
var handlers = require('./handlers/handlers');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

function init(app, handlers){
  routes(app, handlers);
}

init(app, handlers);
