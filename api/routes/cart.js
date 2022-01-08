const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');
const authenticateToken = require('../auth')
const Dish = require("../models/dish");
const cartController = require("../controllers/cart");

router.get('/cart', authenticateToken, (req, res) => {

    Cart.findById( req.user.id )
        .then((data) => {
            res.status(200).json(data.products);
        })
        .catch((error) => {
            res.status(404).json(error);
        });
});

router.get('/cart/total', authenticateToken, (req, res) => {

  Cart.findById( req.user.id )
    .then((data) => {
      res.status(200).json( cartController.getTotal(data) );
    })
    .catch((error) => {
      res.status(404).json(error);
    });
});

router.patch('/cart/add', authenticateToken, async (req, res) => {
  //get customers cart or create new one if it doesn't exist
  let cart;
  await Cart.findById( req.user.id ).then((data) => {
      if (data==null) {

        Cart.create( { _id: req.user.id, products: [] } )
          .then((data) => {
            cart = data;
          })
          .catch((error) => {
            res.status(500).json(error);
          });
      } else {
        cart = data;
      }
    });

  //get the dish that's being added
  let dish;
  await Dish.findById( req.body.dish_id ).then((data) => {
      dish = data;
    })
    .catch((error) => {
      res.status(404).json(error);
    });

  //add the dish to the cart - if it already exists, increment the quantity, otherwise add new item
  let index = cart.products.findIndex(product => product.dish_id === req.body.dish_id);
  if (index!==-1) {
    cart.products[index].quantity += 1;
  } else {
    cart.products.push({
      dish_id: req.body.dish_id,
      name: dish.name,
      quantity: 1,
      unit_price: dish.price
    });
  }

  //save the cart
  cart.save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.patch('/cart/remove', authenticateToken, (req, res) => {
  Cart.findById( req.user.id )
    .then((cart) => {

      cart.products = Object.assign(cart.products.filter(product => product.dish_id !== req.body.dish_id));

      cart.save()
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((error) => {
          res.status(500).json(error);
        });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

router.patch('/cart/clear', authenticateToken, (req, res) => {
  Cart.findById( req.user.id )
    .then((cart) => {

      cart.products = [];

      cart.save()
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((error) => {
          res.status(500).json(error);
        });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

router.post('/cart/finalize', authenticateToken, (req, res) => {
  Cart.findById( req.user.id )
    .then((cart) => {

      Object.assign(cart.products, {});

      cart.save()
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((error) => {
          res.status(500).json(error);
        });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

module.exports = router;
