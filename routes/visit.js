const express = require("express");
const Visit = require("../models/visit");

const router = new express.Router();

router.get("/visit", async (req, res) => {
    try {
        if (!!req.query.patientId) {
            const queryVisit = await Visit.find({
                patientId: req.query.patientId,
            });
            res.status(200).send(queryVisit);
        } else {
            const visit = await Visit.find({});
            res.status(200).send(visit);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/visit/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const oneVisit = await Visit.find({ patientId: id });

        res.status(200).send(oneVisit);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/visit", async (req, res) => {
    const visit = new Visit(req.body);
    try {
        await visit.save();
        res.status(201).send(visit);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put("/visit/:id", async (req, res) => {
    const { id } = req.params;
    const update = req.body;
    try {
        let response = await Visit.findOneAndUpdate({ _id: id }, update);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete("/visit/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await Visit.deleteOne({ _id: id });
        res.status(200).send({
            message: `object with id ${id} has been deleted`,
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
