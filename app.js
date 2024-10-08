import createError from 'http-errors'
import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import path from 'path'
import session from 'express-session'
// import bodyParser from 'body-parser'
// Rotas do sistema 
import routes from './routes/routes.js'

const app = express();

// view engine setup
// app[views] = path.join(__dirname, "views");
app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(session({
  secret: "my session",
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 600000*10
  }
}))

app.use(cookieParser('NewClick'));
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));


app.use(routes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app
