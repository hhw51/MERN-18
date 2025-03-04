var authRouter=require("./routes/authRouter")
var studentRouter=require("./routes/studentRouter")
var teacherRouter=require("./routes/teacherRouter")
var userRouter=require("./routes/userRouter")
var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use("/teacher",teacherRouter)
app.use("/auth",authRouter)
app.use("/student",studentRouter)
app.use("/user",userRouter)

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

module.exports = app;
