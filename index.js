const express = require("express");
const cors = require("cors");

const patientRouter = require("./routes/patient");
const visitRouter = require("./routes/visit");
const storeRouter = require("./routes/store");
const companyRouter = require("./routes/company");
const imageRouter = require("./routes/image");
const { specs, swaggerUi } = require("./swagger");

require("./db/mongoose");

const app = express();
app.use(cors());
app.use(express.json());
app.use(patientRouter);
app.use(visitRouter);
app.use(storeRouter);
app.use(companyRouter);
app.use(imageRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(process.env.PORT || 3000);
