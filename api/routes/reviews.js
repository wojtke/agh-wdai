const express = require('express');
const router = express.Router();
const authenticateToken = require('../auth')
const Review = require("../models/review");


//get all reviews
router.get('/reviews/', async (req, res) => {
  await Review.find({ })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(404).json(error);
    });
});

//get reviews created by user himself
router.get('/reviews/me', authenticateToken, async (req, res) => {
  await Review.find({ user_id: req.id})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(404).json(error);
    });
});

//get reviews for specific dish
router.get('/reviews/dish/:id', async (req, res) => {
  await Review.find({ dish_id: req.params.id})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(404).json(error);
    });
});

//get review by its id
router.get('/reviews/:id', async (req, res) => {
  await Review.findById(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(404).json(error);
    });
});

//create new review
router.post('/reviews', async (req, res) => {
  await Review.create(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

//delete review by its id
router.delete('/reviews/:id', async (req, res) => {

});



module.exports = router;
