const router = require('express').Router();
const Bears = require('./bears-model.js');


// GET uses 'findBears' from bears-model.js
router.get('/', (req,res) => {
    Bears.findBears()
        .then(bears => {
            res.status(200).json(bears);
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

// GET uses 'findBearsByID from bears-model.js
router.get('/:id', (req, res) => {
    const {id} = req.params;

    Bears.findBearsById(id)
        .then(bearName => {
            if(bearName) {
                res.status(200).json(bearName);
            } else {
                res.status(404).json({
                    message: ` Bear with id ${id} not found`
                })
            }
        })
        .catch(err => {
            res.status(500).json(err);
        })
})



// POST uses 'addBears' from bears-model.js
router.post('/', (req, res) => {
    const newBear = req.body

    Bears.addBears(newBear)
        .then(idAdded => {
            res.status(201).json(idAdded);
        })
        .catch(err => {
            res.status(500).json({
                message: "error adding that bear"
            })

        })
})

// PUT uses 'changeBear' from bears-model.js
router.put('/:id', (req, res) => {
    const {id} = req.params;
    const bearUpdateInfo = req.body;

    Bears.changeBear(id, bearUpdateInfo)
        .then(totalBears => {
            if(totalBears > 0) {
                res.status(200).json({
                    message: ` ${totalBears} updated`
                });
            } else {
                res.status(404).json({
                    message: `bear with id ${id} not here`
                })
            }
        }) 
        .catch(err => {
            res.status(500).json(err)
        })
})

// DELETE uses 'nukebear' from bear-model.js
router.delete('/:id', (req, res) => {
    const {id} = req.params;

    Bears.nukeBear(id)
    .then(bearGone => {
        if(bearGone) {
            res.status(200).json({
                message: ` bear with id ${id} nuked`
            })
        } else {
            res.status(404).json({
                messge: `bear not found`
            })
        }
    })
    .catch(err => {
        res.status(500).json(err);
    })
})


// DON'T FORGET TO EXPORT
module.exports = router;