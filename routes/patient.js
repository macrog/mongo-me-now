const express = require("express");
const Patient = require("../models/patient");

const router = new express.Router();

router.get("/patient", async (req, res) => {
    try {
        const patients = await Patient.find({});
        res.status(200).send(patients);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/patientSearch", async (req, res) => {
    try {
        const searchResults = await Users.find({
            name: { $regex: `^${req.params.patientName}`, $options: "i" },
        }).select(["name"]);
        res.status(200).send(searchResults);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
