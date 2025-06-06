const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json()); // parse JSON bodies

app.get("/", (req, res) => {
	res.send("Welcome to your badass backend!");
});

app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT} :D`);
});
