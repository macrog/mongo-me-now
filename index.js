const express = require("express");
const cors = require("cors");

const patientRouter = require("./routes/patient");
require("./db/mongoose");

const app = express();
app.use(cors());
app.use(express.json());
app.use(patientRouter);

app.listen(process.env.PORT || 3000);
