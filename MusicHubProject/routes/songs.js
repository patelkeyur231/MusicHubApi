const express = require("express");
const router = express.Router();

const songController = require("../controllers/songController");
const auth = require("../middleware/tokenAuth");

// GET all songs
router.get("/", auth, songController.getSongs);

// GET song by ID
router.get("/:id", auth, songController.getSongById);

// CREATE song
router.post("/", auth, songController.createSong);

// UPDATE song
router.put("/:id", auth, songController.updateSong);

// DELETE song
router.delete("/:id", auth, songController.deleteSong);

module.exports = router;