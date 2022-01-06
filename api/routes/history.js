const express = require('express');
const router = express.Router();
const OrderHist = require('../models/orderhist');
const authenticateToken = require('../auth')
const Cart = require("../models/cart");

router.get('/history/:id', authenticateToken, (req, res) => {

  OrderHist.find( {user_id: req.user.id} )
    .then((data) => {
      data = data.filter( (order) => {
        order.products.find( (product) => { product.dish_id = req.params.id } )
      });
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(404).json(error);
    });
});

router.get('/history', authenticateToken, (req, res) => {

  OrderHist.find( {user_id: req.user.id} )
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((error) => {
            res.status(404).json(error);
        });
});

router.post('/history', authenticateToken, async (req, res) => {
    let cart;
    await Cart.findById( req.user.id )
      .then((data) => {
        cart = data;
      })
      .catch((error) => {
        res.status(500).json(error);
      });

    let order = new OrderHist({
      user_id: req.user.id,
      products: cart.products,
      total_price: "123.45" //TODO: calculate total price
    });

    order.save()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
});


module.exports = router;
