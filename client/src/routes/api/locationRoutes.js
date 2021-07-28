const router = require("express").Router();
const Location = require('../../models/location');

router.post("/api/location", ({body}, res) => {
    Location.create(body)
        .then(dbLocations => {
            res.json(dbLocations);
        })
        .catch(err => {
            res.status(404).json(err);
        });
});

router.get("/api/location", (req, res) => {
    Location.find({})
})