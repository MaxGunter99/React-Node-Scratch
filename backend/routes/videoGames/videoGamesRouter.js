const express = require("express");
const router = express.Router();
const VideoGames = require("./videoGamesModel");
const profanityMiddleware = require("../../middleware/profanityMiddleware");

// GET ALL VIDEO GAMES
router.get("/", async (req, res) => {
	try {
		const filters = {};
		const { platform, rating, favorite } = req.query;
		if (platform) filters.platform = platform;
		if (rating) filters.rating = rating;
		if (favorite !== undefined) {
			filters.favorite = favorite === "true";
		}

		const entries = await VideoGames.findByFilters(filters).orderBy("id", "desc");
		return res.status(200).json(entries);
	} catch (err) {
		return res.status(500).json({
			error: "Failed to fetch video games",
			err,
		});
	}
});

// GET ONE VIDEO GAME
router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const videoGame = await VideoGames.findById(id);

		if (!videoGame) {
			return res.status(404).json({
				message: `Video game with ID: ${id} not found`,
			});
		}

		return res.status(200).json(videoGame);
	} catch (err) {
		return res.status(500).json({
			message: `Failed to fetch video game ${req?.params?.id}`,
			error: err.message,
		});
	}
});

// ADD VIDEO GAME
router.post("/", profanityMiddleware, async (req, res) => {
	try {
		if (!req.body) {
			return res.status(400).json({ message: "Request body is required" });
		}

		const {
			name,
			platform = "other",
			rating = "",
			genre = null,
			cover_image_url = null,
			external_url = null,
			favorite = false,
			comments = null,
			completed = false,
			replayable = false,
			started_at = null,
			finished_at = null,
		} = req.body;

		const requiredFields = ["name"];

		var missingRequiredFields = [];
		for (const field of requiredFields) {
			if (!req.body[field]) {
				missingRequiredFields.push(field);
			}
		}
		if (missingRequiredFields.length) {
			return res
				.status(400)
				.json({ message: `Request body is missing required fields: ${missingRequiredFields}` });
		}

		const validPlatforms = [
			"pc",
			"steam_deck",
			"mobile",
			"xbox_360",
			"xbox_one",
			"xbox_series_s",
			"xbox_series_x",
			"switch",
			"switch_2",
			"wii",
			"ds",
			"3ds",
			"ps2",
			"ps3",
			"ps4",
			"ps5",
			"other",
		];

		if (!validPlatforms.includes(platform)) {
			return res.status(400).json({ message: "Invalid platform" });
		}

		const validRatings = ["", "*", "**", "***", "****", "*****"];

		if (!validRatings.includes(rating)) {
			return res.status(400).json({ message: "Invalid rating" });
		}

		const newGameData = {
			name,
			platform,
			rating,
			genre,
			cover_image_url,
			external_url,
			favorite,
			comments,
			completed,
			replayable,
			started_at,
			finished_at,
		};

		const newMessage = await VideoGames.addVideoGame(newGameData);
		return res.status(201).json(newMessage);
	} catch (err) {
		return res.status(500).json({
			message: "Failed to post video game",
			error: err.message,
		});
	}
});

// UPDATE ONE VIDEO GAME
router.put("/:id", profanityMiddleware, async (req, res) => {
	try {
		const { id } = req.params;
		const changes = req.body;

		const existingVideoGame = await VideoGames.findById(id);

		if (!existingVideoGame) {
			return res.status(400).json({ message: `Video game with ID: ${id} does not exist` });
		}

		if (!changes) {
			return res.status(400).json({ message: `Changes required to update video game ${id}` });
		}

		const updated = await VideoGames.update(id, changes);

		return res.status(200).json(updated);
	} catch (error) {
		return res.status(500).json({
			message: "Failed to update video game",
			error: error.message,
		});
	}
});

// DELETE ONE VIDEO GAME
router.delete("/:id", async (req, res) => {
	try {
		const videoGame = await VideoGames.remove(req.params.id);
		if (!videoGame) {
			return res.status(404).json({
				message: `Server error deleting video game id: ${req.params.id} not found`,
			});
		}
		return res.status(200).json({ message: `Video game id: ${req.params.id} deleted successfully!` });
	} catch (err) {
		return res.status(500).json({
			message: "Failed to delete video game",
			error: err.message,
		});
	}
});

module.exports = router;
