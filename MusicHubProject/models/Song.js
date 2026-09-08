const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    album: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Album",
        required: true
    }
});

module.exports = mongoose.model("Song", songSchema);