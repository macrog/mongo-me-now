const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
    {
        name: String,
        surname: String,
        gender: String,
        email: String,
        phone: String,
        location: String,
        dob: String,
    },
    { timestamps: true }
);

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
