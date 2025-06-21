const express = require("express");
const router = express.Router();
const UnauthenticatedMessages = require("./unauthenticatedMessagesModel");
const profaneWords = require("profane-words");

const profanityCheck = ( content ) => {
	let containsProfanity = false;

	try {
		// Sanitize, split into words
		const words = content.toLowerCase().split(/\s+/);

		for (const word of words) {
			const cleaned = word.replace(/[^a-z]/gi, "");

			if (profaneWords.includes(cleaned)) {
				containsProfanity = true;
				break;
			}
		}

	} catch (error) {
		console.log("Profanity check error:", error);
	}

	return containsProfanity;
};


// GET ALL MESSAGES
router.get("/", async (req, res) => {
	try {
		const entries = await UnauthenticatedMessages.findAll("unauthenticatedMessages").orderBy("created_at", "desc");
		res.json(entries);
	} catch (err) {
		res.status(500).json({
			error: "Failed to fetch entries",
		});
	}
});

// POST MESSAGE
router.post("/", async (req, res) => {

	
	try {

		const message = req.body;
	
		var contentContainsProfanity = profanityCheck( message.text );
		if ( contentContainsProfanity === true ) {
			const errorMessage = "Content contains profanity, unable to submit content"
			return res.status(500).json({
				message: errorMessage,
				error: errorMessage,
			});
		}

		if (!message) {
			return res.status(400).json({
				error: "Message is required",
			});
		}

		const newMessage = await UnauthenticatedMessages.addMessage({
			text: message,
		});
		res.status(201).json(newMessage);
	} catch (err) {
		res.status(500).json({
			message: "Failed to post entries",
			error: err.message,
		});
	}
});

// GET ONE MESSAGE
router.get("/:id", async (req, res) => {
	try {
		const entries = await UnauthenticatedMessages.findById(req.params.id)
			.then((message) => {
				return res.json(message);
			})
			.catch((err) => {
				return res.status(200).json({
					message: "Server Error getting Message",
					error: err,
				});
			});
		res.json(entries);
	} catch (err) {
		res.status(500).json({
			message: "Failed to fetch entries",
			error: err.message,
		});
	}
});

// UPDATE ONE MESSAGE
router.put("/:id", async (req, res) => {

	
	try {

		const message = req.body;
	
		var contentContainsProfanity = profanityCheck( message.text );
	
		if ( contentContainsProfanity === true ) {
			const errorMessage = "Content contains profanity, unable to submit content"
			return res.status(500).json({
				message: errorMessage,
				error: errorMessage,
			});
		}

		const id = req.params.id;
		const entries = await UnauthenticatedMessages.update(id, message);
		if (!entries) {
			res.status(404).json({
				message: "Server Error deleting Message",
			});
		}
		return res.json(entries);
	} catch (err) {
		res.status(500).json({
			message: "Failed to update entry",
			error: err.message,
		});
	}
});

// DELETE ONE MESSAGE
router.delete("/:id", async (req, res) => {
	try {
		const message = await UnauthenticatedMessages.remove(req.params.id);
		if (!message) {
			res.status(404).json({
				message: "Server Error deleting Message",
			});
		}
		return res.json(message);
	} catch (err) {
		res.status(500).json({
			message: "Failed to delete entry",
			error: err.message,
		});
	}
});

module.exports = router;
