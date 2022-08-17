const { Router } = require('express');
const express = require('express');
const {ObjectID} = require('mongodb');


const createRouter = function(collection){

const router = express.Router();

router.get("/", (req,res) => {
    collection.find().toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err})
    })
})

router.post("/", (req, res) => {
    const newItem = req.body;
    collection.insertOne(newItem)
    .then((result) => {
        res.json(result.ops[0]);
    })
    .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err})
    })

})

router.delete('/:id', (req,res) => {
    const id = req.params.id;
    collection
    .deleteOne({ _id: ObjectID(id) })
    .then((doc) => res.json(doc))
    .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err})
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updateItem = {
        name: req.body.name,
        email: req.body.email,
        date: req.body.date,
        checked_in: req.body.checked_in
    }
    collection
        .updateOne(
            { _id: ObjectID(id) },
            { $set: updateItem }
        )
        .then( (result) => {
            res.json(result);
        }
        )
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err})
        })
    
})


return router;


}

module.exports = createRouter;