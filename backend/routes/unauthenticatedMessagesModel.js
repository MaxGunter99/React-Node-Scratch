//IMPORTS ⬇︎
const db = require("../data/dbConfig");

//EXPORTS ⬇︎
module.exports = {
	addMessage,
	findAll,
	findById,
	update,
	remove,
};

async function addMessage(messageObj) {
	try {
		const [id] = await db("unauthenticatedMessages").insert(messageObj);
		const newMessage = await db("unauthenticatedMessages").where({ id }).first();
		return newMessage;
	} catch (error) {
		console.error("Error adding message:", error);
		throw error;
	}
}

function findAll() {
	return db("unauthenticatedMessages");
}

async function findById(id) {
	let selectedMessage = await db("unauthenticatedMessages").select("*").where({ id }).first();
	return selectedMessage;
}

async function update(id, changes) {
	await db("unauthenticatedMessages").select("*").where({ id }).update(changes);
	let selectedMessage = await db("unauthenticatedMessages").select("*").where({ id }).first();
	return selectedMessage;
}

function remove(id) {
	return db("unauthenticatedMessages").where("id", id).del();
}
