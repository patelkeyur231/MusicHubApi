const Song = require("../models/Song");

// GET all songs
exports.getSongs = async (req, res) => {
    try {
        const songs = await Song.find().populate({
            path: "album",
            populate: { path: "artist" }
        });

        res.json(songs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET song by ID
exports.getSongById = async (req, res) => {
    try {
        const song = await Song.findById(req.params.id).populate({
            path: "album",
            populate: { path: "artist" }
        });

        if (!song) {
            return res.status(404).json({ message: "Song not found" });
        }

        res.json(song);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// CREATE song
exports.createSong = async (req, res) => {
    try {
        const song = new Song(req.body);
        await song.save();
        res.status(201).json(song);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// UPDATE song
exports.updateSong = async (req, res) => {
    try {
        const song = await Song.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(song);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE song
exports.deleteSong = async (req, res) => {
    try {
        await Song.findByIdAndDelete(req.params.id);
        res.json({ message: "Song deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};