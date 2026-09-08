const Artist = require("../models/Artist");

// GET all artists
exports.getArtists = async (req, res) => {
    try {
        const artists = await Artist.find();
        res.json(artists);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET artist by ID
exports.getArtistById = async (req, res) => {
    try {
        const artist = await Artist.findById(req.params.id);

        if (!artist) {
            return res.status(404).json({ message: "Artist not found" });
        }

        res.json(artist);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// CREATE artist
exports.createArtist = async (req, res) => {
    try {
        const artist = new Artist(req.body);
        await artist.save();
        res.status(201).json(artist);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// UPDATE artist
exports.updateArtist = async (req, res) => {
    try {
        const artist = await Artist.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(artist);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE artist
exports.deleteArtist = async (req, res) => {
    try {
        await Artist.findByIdAndDelete(req.params.id);
        res.json({ message: "Artist deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};