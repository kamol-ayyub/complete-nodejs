const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
app.use(express.json());
const port = 3000;
//  middlewares
app.use(morgan('dev'));
app.use((req, res, next) => {
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  req.name = 'Ayyubxon';
  next();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//route handlers

//routes

app.use(`/api/v1/tours`, tourRouter);
app.use(`/api/v1/users`, userRouter);

//users
