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
            res.status(200).json(zooName);
        } else {
            res.status(404).json({
                message: `zoo with id ${id} does not exist`
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

// PUT uses 'update' from zoo-model.js
router.put('/:id', (req, res)=> {
    const {id} = req.params;
    const zooNameChange = req.body;

    Zoos.update(id, zooNameChange)
    .then(totalZoos => {
        if(totalZoos > 0){
            res.status(200).json({
                message: `${totalZoos} updated`
            })
        } else {
            res.status(404).json({
                message: //`the zoo id with ${id} does not exist,
                    `Please add new zoo with name ${zooNameChange.name} to database before trying to update name`
            })
        }
    }) 
    .catch(err => {
        res.status(500).json(err);
    })

});

// DELETE uses 'remove' from zoo-model.js
router.delete('/:id', (req,res) => {
    const {id} = req.params;

    Zoos.remove(id)
    .then(totalZoos => {
        if(totalZoos > 0) {
            const unit = totalZoos > 1 ? 'zoos' : 'zoo';
            res.status(200).json({
                messge: ` ${totalZoos} ${unit} deleted from database`
            })
        } else {
            res.status(404).json({message: `Zoo with id ${id} not found`});
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// DON'T FORGET TO EXPORT
module.exports = router;
