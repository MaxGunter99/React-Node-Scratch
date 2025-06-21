const profaneWords = require("profane-words");

const profanityCheck = (content) => {
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

const profanityMiddleware = (req, res, next) => {
	try {
		const body = req.body;

		for (const key in body) {
			if (typeof body[key] == "string") {
				if (profanityCheck(body[key])) {
					const errorMessage = `Content contains profanity. Submission blocked. (key: ${key})`;
					return res.status(400).json({
						message: errorMessage,
						error: errorMessage,
					});
				}
			}
		}

		next();
	} catch (error) {
		console.log("Profanity middleware error:", error);
		return res.status(500).json({
			message: "Internal error during profanity check",
			error: error.message,
		});
	}
};

module.exports = profanityMiddleware;
