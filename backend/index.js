// ENVIRONMENT VARS
require("dotenv").config();
const secret = require("./config/secrets");

const server = require("./api/server.js");
const PORT = secret.PORT || 3001;


server.listen(PORT, () => {
	console.log(`\nServer listening on http://localhost:${PORT} \nLet's get this party started!`);
});
