const express = require("express");
const Store = require("../models/store");

const router = new express.Router();

router.get("/store", async (req, res) => {
    try {
        if (!!req.query.pointId) {
            const queryStore = await Store.find({
                id: req.query.pointId,
            });
            res.status(200).send(queryStore);
        } else {
            const store = await Store.find({});
            res.status(200).send(hisstoretory);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/store/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const oneStore = await Store.findOne({ _id: id });

        res.status(200).send(oneStore);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/store", async (req, res) => {
    const store = new Store(req.body);
    try {
        await store.save();
        res.status(201).send(store);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete("/store/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await Store.deleteOne({ _id: id });
        res.status(200).send({
            message: `object with id ${id} has been deleted`,
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
