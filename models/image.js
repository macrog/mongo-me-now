const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    _id: String,
    code: String,
    image: String,
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
