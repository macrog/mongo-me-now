const mongoose = require("mongoose");

mongoose
    .connect(
        `${process.env.MONGO_URI_1}//${process.env.USER}:${process.env.PASSWORD}${process.env.MONGO_URI_2}`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log("Unable to connect to MongoDB", error);
    });

// export USER=sana
// export PASSWORD=sana2023
// export MONGO_URI_1=mongodb+srv:
// export MONGO_URI_2=@sana.ykms8wg.mongodb.net/clinic
