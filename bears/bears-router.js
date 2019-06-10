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



// DON'T FORGET TO EXPORT
module.exports = router;