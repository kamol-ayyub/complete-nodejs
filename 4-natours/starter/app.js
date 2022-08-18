const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.use((req, res, next) => {
  console.log('hello from the middleware');
  next();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
};
const getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID!',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};
const createTour = function (req, res) {
  const newID = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newID }, req.body);
  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};
const updateTour = function (req, res) {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID!',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};

const deleteTour = function (req, res) {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID!',
    });
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
};

app.route(`/api/v1/tours`).get(getAllTours).post(createTour);
app
  .route(`/api/v1/tours/:id`)
  .patch(updateTour)
  .get(getTour)
  .delete(deleteTour);