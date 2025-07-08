const express = require("express");
const router = express.Router();
const Users = require("./userModel");
const profanityMiddleware = require("../../middleware/profanityMiddleware");
const restricted = require("../../middleware/restrictedMiddleware");

// GET ONE USER
router.get("/:id", profanityMiddleware, async (req, res) => {
	let id = req.params.id;
    console.log( req.authorization )

	try {
		let user = await Users.findById(id);
		if (!user) {
			return res.status(404).json({
				message: `User with ID: ${id} not found`,
			});
		}
		return res.status(200).json({user});
	} catch (error) {
		return res.status(500).json({
			message: `Failed to fetch user ${id}`,
			error: err.message,
		});
	}
});

// UPDATE ONE USER
router.put("/:id", profanityMiddleware, restricted, (req, res) => {
	let id = req.params.id;

    console.log( id )
    console.log( req.params )

	try {
		let user = Users.findBy(id);
		if (!user) {
			return res.status(404).json({
				message: `User with username: ${id} not found`,
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
