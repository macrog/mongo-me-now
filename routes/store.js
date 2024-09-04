const express = require("express");
const Store = require("../models/store");

const router = new express.Router();
/**
 * @swagger
 * /store/total:
 *   get:
 *     summary: Returns a total number the points
 */
router.get("/store/total", async (req, res) => {
    try {
        const total = await Store.countDocuments();
        res.status(200).send({ total: total });
    } catch (error) {
        res.status(500).send(error);
    }
});

/**
 * @swagger
 * /store:
 *   get:
 *     summary: Returns a list of the points
 */
router.get("/store", async (req, res) => {
    try {
        if (!!req.query.pointId) {
            const queryStore = await Store.find({
                id: req.query.pointId,
            });

            res.status(200).send(queryStore);
        } else if (!!req.query.limit && !!req.query.skip) {
            const store = await Store.find({})
                .skip(req.query.skip)
                .limit(req.query.limit);
            res.status(200).send(store);
        } else {
            const store = await Store.find({});
            res.status(200).send(store);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

/**
 * @swagger
 * /store/:id:
 *   get:
 *     summary: Returns a specific point by id
 */
router.get("/store/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const oneStore = await Store.findOne({ _id: id });

        res.status(200).send(oneStore);
    } catch (error) {
        res.status(500).send(error);
    }
});

/**
 * @swagger
 * /store:
 *   post:
 *     summary: Create a point
 */
router.post("/store", async (req, res) => {
    const store = new Store(req.body);
    try {
        await store.save();
        res.status(201).send(store);
    } catch (error) {
        res.status(500).send(error);
    }
});

/**
 * @swagger
 * /store/:id:
 *   put:
 *     summary: Update a point by id
 */
router.put("/store/:id", async (req, res) => {
    const { id } = req.params;
    const update = req.body;
    try {
        let response = await Store.findOneAndUpdate({ _id: id }, update);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
});

/**
 * @swagger
 * /store/:id:
 *   delete:
 *     summary: Delete a point by id
 */
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
