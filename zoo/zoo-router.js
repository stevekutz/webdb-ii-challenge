const router = require('express').Router();
const Zoos = require('./zoo-model.js');


router.get('/', (req, res) => {

    Zoos.find()  // added this after moving above
    .then(roles => {
        res.status(200).json(roles);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });



  module.exports = router;
