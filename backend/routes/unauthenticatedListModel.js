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
		const [id] = await db("unauthenticatedList").insert(messageObj);
		const newMessage = await db("unauthenticatedList").where({ id }).first();
		return newMessage;
	} catch (error) {
		console.error("Error adding message:", error);
		throw error;
	}
}

function findAll() {
	return db("unauthenticatedList");
}

async function findById(id) {
	let selectedMessage = await db("unauthenticatedList").select("*").where({ id }).first();
	return selectedMessage;
}

async function update(id, changes) {
	await db("unauthenticatedList").select("*").where({ id }).update(changes);
	let selectedMessage = await db("unauthenticatedList").select("*").where({ id }).first();
	return selectedMessage;
}

function remove(id) {
	return db("unauthenticatedList").where("id", id).del();
}
