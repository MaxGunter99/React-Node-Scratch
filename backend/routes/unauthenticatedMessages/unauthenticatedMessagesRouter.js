const express = require("express");
const router = express.Router();
const UnauthenticatedMessages = require("./unauthenticatedMessagesModel");
const profanityMiddleware = require("../../middleware/profanityMiddleware");

// GET ALL MESSAGES
router.get("/", async (req, res) => {
	try {
		const entries = await UnauthenticatedMessages.findAll().orderBy("id", "desc");
		return res.status(200).json(entries);
	} catch (err) {
		return res.status(500).json({
			error: "Failed to fetch messages",
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
			message: "Failed to post message",
			error: err.message,
		});
	}
});

// GET ONE MESSAGE
router.get("/:id", async (req, res) => {
	try {
		const message = await UnauthenticatedMessages.findById(req.params.id);

		if (!message) {
			return res.status(404).json({
				message: `Message with ID: ${req.params.id} not found`,
			});
		}

		return res.status(200).json(message);
	} catch (err) {
		return res.status(500).json({
			message: `Failed to fetch video game ${req?.params?.id}`,
			error: err.message,
		});
	}
});

// UPDATE ONE MESSAGE
router.put("/:id", profanityMiddleware, async (req, res) => {
	try {
		const message = req.body;
		const id = req.params.id;
		const entries = await UnauthenticatedMessages.update(id, message);
		if (!entries) {
			return res.status(404).json({
				message: "Server error deleting message",
			});
		}
		return res.status(200).json(entries);
	} catch (err) {
		return res.status(500).json({
			message: "Failed to update message",
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
				message: "Server error deleting message",
			});
		}
		return res.status(200).json(message);
	} catch (err) {
		return res.status(500).json({
			message: "Failed to delete message",
			error: err.message,
		});
	}
});

module.exports = router;
