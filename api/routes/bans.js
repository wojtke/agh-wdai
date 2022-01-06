const express = require('express');
const router = express.Router();
const Ban = require('../models/ban');
const authenticateToken = require('../auth')

router.post('/bans', authenticateToken, (req, res) => {
  Ban.create( { _id: req.body.user_id, banned: true } )
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

router.delete('/bans/:id', authenticateToken, (req, res) => {

  Ban.findByIdAndDelete( req.params.id )
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

router.get('/bans/me', authenticateToken, (req, res) => {

  Ban.findById( req.user.id )
    .then((data) => {
      if (data) {
        res.status(200).json( { banned: data.banned } );
      } else {
        res.status(200).json({ banned: false });
      }
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

router.get('/bans', authenticateToken, (req, res) => {

  Ban.find( { banned: true } )
    .then((data) => {
      res.status(200).json( data.map( obj => obj._id) );
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});


module.exports = router;
