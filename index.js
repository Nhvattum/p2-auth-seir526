// Required NPM Libraries
require('dotenv').config();
const Express = require('express');
const ejsLayouts = require('express-ejs-layouts');

// App Setup
const app = Express();
app.use(Express.urlencoded({ extended: false}));
app.use(Express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(ejsLayouts);

// ROUTES
app.get('/', function(req, res) {
    //check to see if user is logged in
    res.render('index');
})

// initialise app on Port
app.listen(process.env.PORT || 3000, function() {
    console.log(`☕️ Listening to the smooth sweet sounds of port ${process.env.PORT} in the morning ☕️.`)
});