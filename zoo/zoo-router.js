const router = require('express').Router();
const Zoos = require('./zoo-model.js');

// GET  uses 'find' from zoo-model.js
router.get('/', (req, res) => {

    Zoos.find()  // added this after moving above
    .then(roles => {
        res.status(200).json(roles);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

// GET by id uses 'findById' from zoo-model.js
router.get('/:id', (req, res) => {

    const {id} = req.params;
    Zoos.findById(id)
    .then(zooName => {
        if(zooName){
            res.status(200).json.zooName;
        } else {
            res.status(404).json({
                message: `zooName does not exist`
            })
        }
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

// POST uses 'add' from zoo-model.js
router.post('/', (req, res) => {

    const newZoo = req.body;
    Zoos.add(newZoo)
    .then(idLastAdded => {
        res.status(201).json(idLastAdded);
    })    
    .catch(err => {
        if(err.errno === 19) {
            res.status(451).json({
                message: `A zoo named ${newZoo.name} already exists`
            })
        } else {
           res.status(500).json(err);  
        }      
    })
})






  module.exports = router;
