const router = require('express').Router();
let Cost = require('../models/cost.model');

//retrieve all
router.route('/').get((req, res) => {
    Cost.find()
        .then(cost => res.json(cost))
        .catch(err => res.status(400).json('Error: ' + err));
});


//create
router.route('/add').post((req, res) => {
    const _id = req.body._id;
    const patientname = req.body.patientname;
    const date = Date.parse(req.body.date);;
    const testingname = req.body.testingname;
    const scanCost = req.body.scanCost;
    const noOfScans = req.body.noOfScans;
    const totalCost = (scanCost * noOfScans);


    const newSalary = new Cost({

        _id,
        patientname,
        date,
        testingname,
        scanCost,
        noOfScans,
        totalCost


    });

    newCost.save()
        .then(() => res.json('New cost entry added.\n Total Cost of patient: ' + totalCost))
        .catch(err => res.status(400).json('Error: ' + err));
});

//retrieve function 
router.route('/:id').get((req, res) => {
    Cost.findById(req.params.id)
        .then(cost => res.json("Patient ID: " + cost._id + "\n" + "Patient name: " + cost.name + "\n" + "Total Cost: " + cost.totalCost))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete function
router.route('/:id').delete((req, res) => {
    Cost.findByIdAndDelete(req.params.id)
        .then(() => res.json('Cost entry deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update function
router.route('/update/:id').post((req, res) => {
    Cost.findById(req.params.id)
        .then(cost => {
            cost._id = req.body._id;
            cost.patientname = req.body.patientname;
            cost.date = Date.parse(req.body.date);
            cost.testingname = req.body.testingname;
            cost.scanCost = req.body.scanCost;
            salary.noOfScans = req.body.noOfScans;
            cost.totalCost = (scanCost * noOfScans);

            cost.save()
                .then(() => res.json('Cost entry updated.\n Total cost of patient: ' + totalCost))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;