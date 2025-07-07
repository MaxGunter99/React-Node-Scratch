const express = require("express");
const router = express.Router();
const Users = require("./userModel");
const profanityMiddleware = require("../../middleware/profanityMiddleware");
const restricted = require("../../middleware/restrictedMiddleware");

// GET ONE USERS
router.get("/:id", profanityMiddleware, restricted, (req, res) => {
	let id = req.params.id;

	try {
		let user = Users.findById(id);
		if (!user) {
			return res.status(404).json({
				message: `User with ID: ${id} not found`,
			});
		}
		return res.status(200).json(user);
	} catch (error) {
		return res.status(500).json({
			message: `Failed to fetch user ${id}`,
			error: err.message,
		});
	}
});

module.exports = router;
