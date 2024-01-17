// create web server
// create a path to public
const publicPath = path.resolve(__dirname, 'public');
// create a path to views
const viewsPath = path.resolve(__dirname, 'views');
// create a path to partials
const partialsPath = path.resolve(__dirname, 'views/partials');
// create a path to handlebars
const handlebars = require('express-handlebars');
// create a path to body-parser
const bodyParser = require('body-parser');
// create a path to mongoose
const mongoose = require('mongoose');
// create a path to method-override
const methodOverride = require('method-override');
// create a path to connect-flash
const flash = require('connect-flash');
// create a path to express-session
const session = require('express-session');
// create a path to passport
const passport = require('passport');
// create a path to passport-local
const localStrategy = require('passport-local');
// create a path to express-validator
const expressValidator = require('express-validator');
// create a path to moment