const express = require('express');
const router = express.Router();
const Dish = require('../models/dish');

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

router.delete('/menu/:id', (req, res) => {
    const id = req.params.id;

    Dish.findByIdAndDelete( id )
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

router.post('/menu/new', (req, res) => {
    const data = req.body;

    Dish.create(data, (error, obj) => {
        if (error) {
            res.status(500).json(error);
        }
        res.status(201).json(obj);
    });
});

module.exports = router;
