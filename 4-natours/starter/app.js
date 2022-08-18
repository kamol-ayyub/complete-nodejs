const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
app.use(express.json());

//  middlewares
app.use(morgan('dev'));
app.use((req, res, next) => {
  next();
});

//routes

app.use(`/api/v1/tours`, tourRouter);
app.use(`/api/v1/users`, userRouter);

module.exports = app;

//users
