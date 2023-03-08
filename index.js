const express = require("express");
const cors = require("cors");

const patientRouter = require("./routes/patient");
const historyRouter = require("./routes/history");
const storeRouter = require("./routes/store");

require("./db/mongoose");

const app = express();
app.use(cors());
app.use(express.json());
app.use(patientRouter);
app.use(historyRouter);
app.use(storeRouter);

app.listen(process.env.PORT || 3000);
