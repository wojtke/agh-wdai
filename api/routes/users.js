const jwt = require('jsonwebtoken');
const express = require('express');
const User = require("../models/user");
const router = express.Router();
const bcrypt = require('bcrypt');
const authenticateToken = require('../auth')
const Cart = require("../models/cart");
const {generateCart} = require("./cart");


router.post('/users/register', async (req, res) => {
  const data = req.body;
  data.role = 'user';

  User.findOne( {email: req.body.email} )
    .then((data) => {
      if(data!=null) {
        res.status(400).json({msg: "User already exists"});
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });

  try {
    data.password = await bcrypt.hash(data.password, 10);
  } catch (error) {
    res.status(500).json(error);
  }

  await User.create(data)
    .then((user) => {

      let cart = {
        _id: user._id,
        products: []
      }

      Cart.create(cart)
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((error) => {
          res.status(500).json(error);
        });
    })
    .catch((error) => {
      res.status(500).json(error);
    });

});

router.post('/users/login', async (req, res) => {

  let user;
  await User.findOne( { email: req.body.email} )
    .then((data) => {
      if(data==null) {
        res.status(400).json({msg: "User not found"});
      } else {
        user = data;
      }
    })
    .catch((error) => {
      console.log(error)
      res.status(500);
    });

  try {
    if(await bcrypt.compare(req.body.password, user.password)) {
      const plain_user = {
        id: user._id,
        role: user.role
      }
      const accessToken = jwt.sign(plain_user, process.env.ACCESS_TOKEN_KEY, { expiresIn: '1h'});

      res.cookie("accessToken", accessToken, {httpOnly: true})
        .status(200).json({ msg:"Logged in successfully" });

    }
    else {
      res.status(401).send({msg: "Unauthorized"});
    }
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
});

router.get("/users/logout", authenticateToken, (req, res) => {
  return res
    .clearCookie("accessToken")
    .status(200)
    .json({ msg: "Logged out successfully" });
});

router.get("/users/me", authenticateToken, async (req, res) => {
  await User.findById( req.user.id )
    .then((data) => {
      if(data==null) {
        res.status(400).json({msg: "User not found"});
      } else {
        res.status(200).json({
          _id: data._id, // ==req.user.id
          name: data.name,
          email: data.email,
          role: data.role
        });
      }
    })
    .catch((error) => {
      console.log(error)
      res.status(500);
    });
});

router.get("/users/all", authenticateToken, async (req, res) => {
  await User.find({  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500);
    });
});

router.get("/users/:id", authenticateToken, async (req, res) => {
  await User.findById(req.params.id )
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500);
    });
});


module.exports = router;

