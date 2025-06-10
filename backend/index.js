const server = require("./api/server.js");
const PORT = 3001;

server.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT} :D`);
});
