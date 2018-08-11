var express = require('express');              
var bodyParser = require('body-parser');
var path = require('path');
           require('dotenv').config();

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));


var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


var todoController = require('./controllers/todo_troller');

app.use('/', todoController);


app.listen(PORT, () => {
    console.log('listening on: http://localhost:' + PORT);
});