const express = require("express");
const Image = require("../models/image");

const router = new express.Router();

/**
 * @swagger
 * /image/:visitID:
 *   get:
 *     summary: Returns a list of images for teh visit
 */
router.get("/image/:visitPointCode", async (req, res) => {
    const { visitPointCode } = req.params;
    try {
        const oneImage = await Image.findOne({
            code: visitPointCode.toString(),
        });

        res.status(200).send(oneImage);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
