const express = require("express");
const patientRouter = require("./routes/patient");

require("./db/mongoose");

const app = express();

app.use(express.json());

app.use(patientRouter);

app.listen(process.env.PORT || 3000);
