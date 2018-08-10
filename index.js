var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


var todoController = require('./controllers/burgers_controller');

app.use('/', todoController);
app.use(express.static('public'));


app.listen(PORT, () => {
    console.log('listening on: http://localhost:' + PORT);
});