const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
    {
        logo: String,
        genericInfo: String,
    },
    { timestamps: true }
);

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
