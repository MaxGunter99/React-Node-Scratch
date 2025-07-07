const jwt = require("jsonwebtoken");
const secret = require("../config/secrets");

module.exports = (req, res, next) => {
	const token = req.headers.authorization;
	if (token) {
		jwt.verify(token, secret.jwtSecret, (error, decodedToken) => {
			if (error) {
				return res
					.status(401)
					.json({ message: "Sorry but your token is not verified from the restricted middleware", error });
			} else {
				req.decodedJwt = decodedToken;
				next();
			}
		});
	} else {
		return res.status(401).json({ message: "Missing token" });
	}
};
