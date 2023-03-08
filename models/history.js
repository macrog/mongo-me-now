const mongoose = require("mongoose");

const historySchema = new mongoose.Schema(
    {
        patientId: String,
        note: String,
        points: [String],
    },
    { timestamps: true }
);

const History = mongoose.model("History", historySchema);

module.exports = History;
