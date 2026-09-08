const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
app.use("/artists", require("./routes/artists"));
app.use("/albums", require("./routes/albums"));
app.use("/songs", require("./routes/songs"));

// User Authentication Routes
app.use("/api/users", require("./routes/users"));

// Home Route
app.get("/", (req, res) => {
    res.send("Music Hub API Running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});