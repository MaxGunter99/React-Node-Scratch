// Imports
const express = require("express");
const server = express();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

// Routers
const unauthenticatedList = require("../routes/unauthenticatedMessagesRouter");
const videoGames = require("../routes/videoGamesRouter");

// Apply Middleware
server.use(express.json());
server.use(morgan("short"));
server.use(helmet());
server.use(cors());

// Router extensions
server.use("/unauthenticatedMessages", unauthenticatedList);
server.use("/videoGames", videoGames);

// Sanity Check
server.get("/", (req, res) => {
	res.send("Welcome to your badass backend!");
});

// Exports
module.exports = server;
