const express = require("express");
const axios = require("axios");
const Company = require("../models/company");

const bookingApi = "https://user-api-v2.simplybook.me/admin";

const router = new express.Router();

router.get("/company", async (req, res) => {
    try {
        const company = await Company.find({});
        res.status(200).send(company[0]);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/appointment", async (req, res) => {
    try {
        axios
            .post(bookingApi + "/auth", {
                company: "fakecompany125",
                login: "maciekg81@gmail.com",
                password: "^3NofG9z%wzrFV1J",
            })
            .then((response) => {
                axios
                    .get(bookingApi + "/bookings?filter[upcoming_only]=1", {
                        headers: {
                            "X-Company-Login": "fakecompany125",
                            "X-Token": response.data.token,
                            "Access-Control-Allow-Origin": "*",
                            "Access-Control-Allow-Headers":
                                "X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization",
                            "Access-Control-Allow-Methods":
                                "GET, POST, OPTIONS, PUT, DELETE, PATCH",
                        },
                    })
                    .then((response) => {
                        res.status(200).send(response.data);
                    })
                    .catch((error) => {
                        res.status(500).send(error);
                    });
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
