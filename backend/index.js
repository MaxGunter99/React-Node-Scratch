const server = require("./api/server.js");
const PORT = 3001;

server.listen(PORT, () => {
	console.log(`\nServer listening on http://localhost:${PORT} \nLet's get this party started!`);
});
