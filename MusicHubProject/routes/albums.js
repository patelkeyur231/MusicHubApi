const express = require("express");
const router = express.Router();

const albumController = require("../controllers/albumController");
const auth = require("../middleware/tokenAuth");

// GET all albums
router.get("/", auth, albumController.getAlbums);

// GET album by ID
router.get("/:id", auth, albumController.getAlbumById);

// CREATE album
router.post("/", auth, albumController.createAlbum);

// UPDATE album
router.put("/:id", auth, albumController.updateAlbum);

// DELETE album
router.delete("/:id", auth, albumController.deleteAlbum);

module.exports = router;