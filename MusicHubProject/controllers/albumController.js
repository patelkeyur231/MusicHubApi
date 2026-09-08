const Album = require("../models/Album");

// GET all albums
exports.getAlbums = async (req, res) => {
    try {
        const albums = await Album.find().populate("artist");
        res.json(albums);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET album by ID
exports.getAlbumById = async (req, res) => {
    try {
        const album = await Album.findById(req.params.id).populate("artist");

        if (!album) {
            return res.status(404).json({ message: "Album not found" });
        }

        res.json(album);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// CREATE album
exports.createAlbum = async (req, res) => {
    try {
        const album = new Album(req.body);
        await album.save();
        res.status(201).json(album);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// UPDATE album
exports.updateAlbum = async (req, res) => {
    try {
        const album = await Album.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(album);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE album
exports.deleteAlbum = async (req, res) => {
    try {
        await Album.findByIdAndDelete(req.params.id);
        res.json({ message: "Album deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};