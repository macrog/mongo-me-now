const express = require("express");
const Company = require("../models/company");

const router = new express.Router();

router.get("/company", async (req, res) => {
    try {
        const company = await Company.find({});
        res.status(200).send(company);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
