const express = require("express");
const router = express.Router();
const UnauthenticatedMessages = require("./unauthenticatedMessagesModel");
const profanityMiddleware = require("../middleware/profanityMiddleware");

// GET ALL MESSAGES
router.get("/", async (req, res) => {
	try {
		const entries = await UnauthenticatedMessages.findAll("unauthenticatedMessages").orderBy("id", "desc");
		return res.status(200).json(entries);
	} catch (err) {
		return res.status(500).json({
			error: "Failed to fetch entries",
		});
	}
});

// POST MESSAGE
router.post("/", profanityMiddleware, async (req, res) => {
	try {
		const message = req.body;

		if (!message) {
			return res.status(400).json({
				error: "Message is required",
			});
		}

		const newMessage = await UnauthenticatedMessages.addMessage({
			text: message,
		});
		return res.status(201).json(newMessage);
	} catch (err) {
		return res.status(500).json({
			message: "Failed to post entries",
			error: err.message,
		});
	}
});

// GET ONE MESSAGE
router.get("/:id", async (req, res) => {
	try {
		const entries = await UnauthenticatedMessages.findById(req.params.id).then((message) => {
			return res.status(200).json(message);
		});
		return res.status(200).json(entries);
	} catch (err) {
		return res.status(500).json({
			message: "Failed to fetch entries",
			error: err.message,
		});
	}
});

// UPDATE ONE MESSAGE
router.put("/:id", profanityMiddleware, async (req, res) => {
	try {
		const message = req.body;

		var contentContainsProfanity = profanityCheck(message.text);

		if (contentContainsProfanity === true) {
			const errorMessage = "Content contains profanity, unable to submit content";
			return res.status(500).json({
				message: errorMessage,
				error: errorMessage,
			});
		}

		const id = req.params.id;
		const entries = await UnauthenticatedMessages.update(id, message);
		if (!entries) {
			return res.status(404).json({
				message: "Server Error deleting Message",
			});
		}
		return res.status(200).json(entries);
	} catch (err) {
		return res.status(500).json({
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
			return res.status(404).json({
				message: "Server Error deleting Message",
			});
		}
		return res.status(200).json(message);
	} catch (err) {
		return res.status(500).json({
			message: "Failed to delete entry",
			error: err.message,
		});
	}
});

module.exports = router;
