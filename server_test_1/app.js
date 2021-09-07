var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// app.use('/', (req, res, next) => {
//   console.log('로그인 체크');
//   next();
// });


app.use('/', indexRouter);
// app.use('/users', usersRouter);

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

// GET /test/main



// router.get("/test/main", (req, res, next) => {
//   res.json({
//     title: "test"
//   })
// });




// router.get("/posts/create", (req, res, next) => {
//   res.json({
//     title: "test main"
//   })
// });

// router.get("/posts/update", (req, res, next) => {
//   res.json({
//     contenet: "update"
//   })
// });

// router.get("/posts/delete", (req, res, next) => {
//   res.json({
//     content: "delete"
//   })
// });

module.exports = app;




