const express = require('express');
const router = express.Router();
const tourController = require('./../controllers/tourController');

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTour, tourController.getAllTours);
router.route('/tour-stats').get(tourController.getTourStats);
router
  .route(`/`)
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route(`/:id`)
  .patch(tourController.updateTour)
  .get(tourController.getTour)
  .delete(tourController.deleteTour);
module.exports = router;
