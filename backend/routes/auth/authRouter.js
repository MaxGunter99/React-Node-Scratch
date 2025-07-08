const express = require("express");
const authRouter = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const users = require("../user/userModel");
const secret = require("../../config/secrets");
const profanityMiddleware = require("../../middleware/profanityMiddleware");

// REGISTER USER
authRouter.post("/register", profanityMiddleware, (req, res) => {
	if (req.body.username && req.body.password) {
		let user = req.body;
		const hash = bcrypt.hashSync(user.password, 10);
		user.password = hash;
		users
			.addUser(user)
			.then((saved) => {
				return res.status(201).json({ message: "Successfully Registered!", saved });
			})
			.catch((error) => {
				return res.status(500).json({ message: "Server error", error });
			});
	} else {
		return res.status(406).json({ message: "Error Registering - Missing Username or Password" });
	}
});

// LOGIN USER
authRouter.post("/login", profanityMiddleware, (req, res) => {
	if (req?.body?.username && req?.body?.password) {
		let { username, password } = req.body;
		try {
			users
				.findBy({ username })
				.first()
				.then((user) => {
					if (user && bcrypt.compareSync(password, user.password)) {
						const token = generateToken(user);
						return res.status(200).json({ message: `Login Success! Welcome ${user.username}`, token: token, id: user.id, uuid: user.uuid });
					} else {
						return res.status(401).json({ message: "Invalid Credentials, please try again" });
					}
				})
				.catch((error) => {
					return res.status(500).json({ message: "Server error, please try again.", error });
				});
		} catch (error) {
			return res.status(404).json({ message: "Server error, user not found", error });
		}
	} else {
		return res.status(406).json({ message: "Error Registering - Missing Username or Password" });
	}
});

function generateToken(user) {
	const payload = {
		subject: user.id,
		username: user.username,
	};

	const options = {
		expiresIn: secret.tokenExpiration,
	};
    console.log( secret )

	return jwt.sign(payload, secret.jwtSecret, options);
}

module.exports = authRouter;
