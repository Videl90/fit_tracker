const router = require("express").Router();
const workout = require("../models/workout.js");


router.post("/api/workouts", ({ body }, res) => {
    console.log("Hi")
    workout.create(body).then(dbWO => {
        res.json(dbWO);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
    console.log("Hi")
    workout.find({})
        .then(dbWO => {
        res.json(dbWO);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    workout.findByIdAndUpdate(
        req.params.id,
        { $push:  { exercise: req.body}},
        { new: true}
    ).then(dbWO => {
        res.json(dbWO);
    }).catch(err => {
        res.status(400).json(err);
    })
})


router.get("/api/workouts/range", (req, res) => {
    console.log("Hi")
    workout.find({})
        .then(dbWO => {
        res.json(dbWO);
    }).catch(err => {
        res.status(400).json(err);
    });
});



module.exports = router;

