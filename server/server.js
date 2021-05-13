const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Express App
const app = express();
const PORT = process.env.PORT || 8000;

// MongoDB connected
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        throw err;
    });

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/api", require("./routes/api"));

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
