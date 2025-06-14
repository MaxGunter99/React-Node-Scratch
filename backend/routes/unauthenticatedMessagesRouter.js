const express = require("express");
const router = express.Router();
const UnauthenticatedMessages = require("./unauthenticatedMessagesModel");

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
		const { message } = req.body;

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
		const id = req.params.id;
		const message = req.body;
		const entries = await UnauthenticatedMessages.update(id, message)
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
			message: "Failed to update entry",
			error: err.message,
		});
	}
});

// DELETE ONE MESSAGE
router.delete("/:id", async (req, res) => {
	try {
		const entries = await UnauthenticatedMessages.remove(req.params.id)
			.then((message) => {
				return res.json(message);
			})
			.catch((error) => {
				return res.status(200).json({
					message: "Server Error deleting Message",
				});
			});
		res.json(entries);
	} catch (err) {
		res.status(500).json({
			message: "Failed to delete entry",
			error: err.message,
		});
	}
});

module.exports = router;
