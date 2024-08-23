import createError from 'http-errors'
import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import path from 'path'
// Rotas do sistema 
import indexRouter from './routes/home.js'
import usersRouter from './routes/users.js'

const app = express();

// view engine setup
// app[views] = path.join(__dirname, "views");
app.set('views', 'views');
app.set('view engine', 'ejs');

// app.use(logger('dev'));

// app.use(express.cookieParser('NewClick'));
// app.use(express.session());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));


app.use('/', indexRouter);
app.use('/users', usersRouter);

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
