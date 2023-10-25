const express = require("express");
const Image = require("../models/image");

const router = new express.Router();

router.get("/image/:code", async (req, res) => {
    const { code } = req.params;
    try {
        const oneImage = await Image.findOne({ code: code });

        res.status(200).send(oneImage);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
