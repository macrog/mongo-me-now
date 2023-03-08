const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema(
    {
        id: Number,
        pointMinus: String,
        pontPlus: String,
        name: String,
        type: String,
        image: String,
        group: String,
    },
    { timestamps: true }
);

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
