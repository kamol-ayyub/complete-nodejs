const express = require('express');
const router = express.Router();
const tourController = require('./../controllers/tourController');

router.param('id', tourController.checkID);

router
  .route(`/`)
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);
router
  .route(`/:id`)
  .patch(tourController.updateTour)
  .get(tourController.getTour)
  .delete(tourController.deleteTour);
module.exports = router;
