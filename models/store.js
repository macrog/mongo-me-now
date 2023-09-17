const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema(
    {
        _id: String,
        code: String,
        group: String,
        parent: String,
        negativePoint: String,
        positivePoint: String,
        name: String,
        type: String,
        image: String,
        moreInfo: String,
    },
    { timestamps: true }
);

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
