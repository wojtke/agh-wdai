const express = require('express');
const router = express.Router();
const Dish = require('../models/dish');
const authenticateToken = require('../auth')

router.get('/menu', (req, res) => {

    Dish.find({  })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((error) => {
            res.status(404).json(error);
        });
});

router.get('/menu/:id', (req, res) => {

    Dish.findById( req.params.id )
        .then((data) => {
            if(data==null) {
                res.status(404).json({msg: "Not found"});
            } else {
                res.status(200).json(data);
            }
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

router.patch('/menu/:id', (req, res) => {

  Dish.findById( req.params.id )
    .then((data) => {
      if(data==null) {
        res.status(404).json({msg: "No object with such id"});
      } else {
        data = Object.assign(data, req.body);
        data.save()
          .then((data) => {
            res.status(200).json(data);
          })
          .catch((error) => {
            res.status(400).json(error);
          });
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });

});

router.delete('/menu/:id', (req, res) => {

    Dish.findById( req.params.id )
      .then((data) => {
        if(data==null) {
          return res.status(404).json({msg: "No object with such id"});
        }
      }).
      catch((error) => {
        res.status(500).json(error);
      });

    Dish.findByIdAndDelete( req.params.id )
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
});

router.post('/menu', (req, res) => {
    delete req.body._id;
    Dish.create(req.body)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
});

module.exports = router;
