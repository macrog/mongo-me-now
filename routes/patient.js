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
                    {
                        email: {
                            $regex: `${req.query.patientName}`,
                            $options: "i",
                        },
                    },
                    {
                        phone: {
                            $regex: `${req.query.patientName}`,
                            $options: "i",
                        },
                    },
                    {
                        location: {
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

router.get("/patient/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const onePatent = await Patient.findOne({ _id: id });

        res.status(200).send(onePatent);
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

router.put("/patient/:id", async (req, res) => {
    const { id } = req.params;
    const update = req.body;
    try {
        let response = await Patient.findOneAndUpdate({ _id: id }, update);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete("/patient/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await Patient.deleteOne({ _id: id });
        res.status(200).send({
            message: `object with id ${id} has been deleted`,
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
