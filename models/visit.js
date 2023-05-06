const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema(
    {
        patientId: String,
        note: String,
        points: [String],
    },
    { timestamps: true }
);

const Visit = mongoose.model("Visit", visitSchema);

module.exports = Visit;
