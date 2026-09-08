const express = require("express");
const router = express.Router();

const artistController = require("../controllers/artistController");
const auth = require("../middleware/tokenAuth");

// GET all artists
router.get("/", auth, artistController.getArtists);

// GET artist by ID
router.get("/:id", auth, artistController.getArtistById);

// CREATE artist
router.post("/", auth, artistController.createArtist);

// UPDATE artist
router.put("/:id", auth, artistController.updateArtist);

// DELETE artist
router.delete("/:id", auth, artistController.deleteArtist);

module.exports = router;