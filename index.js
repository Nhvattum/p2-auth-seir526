// Required NPM Libraries
require('dotenv').config();
const Express = require('express');
const ejsLayouts = require('express-ejs-layouts');
// passport, and custom middleware, sequelize sessions
const helmet = require('helmet');
const session = require('express-session');
const flash = require('flash');


// App Setup
const app = Express();
app.use(Express.urlencoded({ extended: false}));
app.use(Express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(require('morgan')('dev'));
app.use(helmet());

// ROUTES
app.get('/', function(req, res) {
    //check to see if user is logged in
    res.render('index');
})

// include auth controller
app.use('/auth', require('./controllers/auth'));

// initialise app on Port
app.listen(process.env.PORT || 3000, function() {
    console.log(`☕️ Listening to the smooth sweet sounds of port ${process.env.PORT} in the morning ☕️.`)
});