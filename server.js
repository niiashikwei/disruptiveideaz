var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile('./public/index.html', {"root": __dirname});
});

app.get('/tab_viewer', function (req, res) {
    res.sendFile('./public/app_pages/tab_viewer.html', {"root": __dirname});
});

app.get('/dropbox_cms', function (req, res) {
    res.sendFile('./public/app_pages/dropbox_cms.html', {"root": __dirname});
});

app.use('/css', express.static(__dirname + '/public/css'));

var server = app.listen(process.env.PORT || 5000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
