const express = require("express");
const router = express.Router();
const UnauthenticatedList = require("./unauthenticatedListModel");

// GET ALL MESSAGES
router.get("/", async (req, res) => {
	try {
		const entries = await UnauthenticatedList.findAll("unauthenticatedList").orderBy("created_at", "desc");
		res.json(entries);
	} catch (err) {
		res.status(500).json({
			error: "Failed to fetch entries",
		});
	}
});

// POST MESSAGES
router.post("/", async (req, res) => {
	try {
		const { message } = req.body;

		if (!message) {
			return res.status(400).json({
				error: "Message is required",
			});
		}

		const newMessage = await UnauthenticatedList.addMessage({
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

// GET ONE MESSAGES
router.get("/:id", async (req, res) => {
	try {
		const entries = await UnauthenticatedList.findById(req.params.id)
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

// UPDATE ONE MESSAGES
router.put("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const message = req.body;
		const entries = await UnauthenticatedList.update(id, message)
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

// DELETE ONE MESSAGES
router.delete("/:id", async (req, res) => {
	try {
		const entries = await UnauthenticatedList.remove(req.params.id)
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
