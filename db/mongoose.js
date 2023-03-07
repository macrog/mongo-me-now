const mongoose = require("mongoose");

mongoose
    .connect("mongodb+srv://sana:sana2023@sana.ykms8wg.mongodb.net/clinic", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log("Unable to connect to MongoDB", error);
    });
