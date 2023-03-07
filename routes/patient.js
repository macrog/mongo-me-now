const express = require("express");
const Patient = require("../models/patient");

const router = new express.Router();

router.get("/patient", async (req, res) => {
    try {
        if (!!req.query.patientName) {
            const searchResults = await Patient.find({
                $or: [
                    {
                        name: {
                            $regex: `${req.query.patientName}`,
                            $options: "i",
                        },
                    },
                    {
                        surname: {
                            $regex: `${req.query.patientName}`,
                            $options: "i",
                        },
                    },
                ],
            });
            res.status(200).send(searchResults);
        } else {
            const patients = await Patient.find({});
            res.status(200).send(patients);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/patient", async (req, res) => {
    const patient = new Patient(req.body);
    try {
        await patient.save();
        res.status(201).send(patient);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
