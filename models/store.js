const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema(
    {
        id: Number,
        negativePoint: String,
        positivePoint: String,
        name: String,
        type: String,
        image: String,
        group: String,
    },
    { timestamps: true }
);

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
