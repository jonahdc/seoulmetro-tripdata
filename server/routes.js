

var routes = function(app, handlers) {
app.get('/', handlers.test);

  app.get('/comments.json', function(req, res) {
    console.log('testsdfsdfest');
    fs.readFile('comments.json', function(err, data) {
      res.setHeader('Content-Type', 'application/json');
      res.send(data);
    });
  });

  app.post('/comments.json', function(req, res) {

    fs.readFile('comments.json', function(err, data) {
      var comments = JSON.parse(data);
      comments.push(req.body);
      fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'no-cache');
        res.send(JSON.stringify(comments));
      });
    });
  });

}

module.exports = routes;
