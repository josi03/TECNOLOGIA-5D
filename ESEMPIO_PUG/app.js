var express = require('express');
var app = express();

app.set('view engine', 'pug'); 

app.use(express.static(__dirname + '/public')); 

app.get('/', function (req, res) {

  res.render('index', {
    title: 'Homepage',
    content : 'Questa pagina parla del mondo e di tanto altro'
  });
});
app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});