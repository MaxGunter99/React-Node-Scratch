//IMPORTS ⬇︎
const db = require("../data/dbConfig");

//EXPORTS ⬇︎
module.exports = {
	// findAll,
	findByFilters,
	findById,
	addVideoGame,
	update,
	remove,
};

// function findAll() {
//     return db( "videoGames" );
// }

function findByFilters(filters) {
	return db("videoGames").where(filters);
}

async function findById(id) {
	let selectedVideoGame = await db("videoGames").select("*").where({ id }).first();
	return selectedVideoGame;
}

async function addVideoGame(videoGameObj) {
	try {
		const [id] = await db("videoGames").insert(videoGameObj);
		const newVideoGame = await db("videoGames").where({ id }).first();
		return newVideoGame;
	} catch (error) {
		console.error("Error adding video game:", error);
		throw error;
	}
}

async function update(id, changes) {
	await db("videoGames").where({ id }).update(changes);
	return findById(id);
}

async function remove(id) {
	return db("videoGames").where("id", id).del();
}
