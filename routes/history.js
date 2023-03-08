const express = require("express");
const History = require("../models/history");

const router = new express.Router();

router.get("/history", async (req, res) => {
    try {
        if (!!req.query.patientId) {
            const queryHistory = await History.find({
                patientId: req.query.patientId,
            });
            res.status(200).send(queryHistory);
        } else {
            const history = await History.find({});
            res.status(200).send(history);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/history/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const oneHistory = await History.findOne({ _id: id });

        res.status(200).send(oneHistory);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/history", async (req, res) => {
    const history = new History(req.body);
    try {
        await history.save();
        res.status(201).send(history);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete("/history/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await History.deleteOne({ _id: id });
        res.status(200).send({
            message: `object with id ${id} has been deleted`,
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
