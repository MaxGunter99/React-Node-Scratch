//IMPORTS ⬇︎
const db = require("../../data/dbConfig");

//EXPORTS ⬇︎
module.exports = {
    findAll,
    findBy,
    findById,
    addUser,
    update,
    remove,
};

const tableName = "user"

function findAll() {
    return db( tableName );
}

function findBy( user ) {
    return( db( tableName ).where( user ) )
}

async function findById(id) {
    let selectedUser = await db( tableName ).select("*").where({ id }).first();
    return selectedUser;
}

async function addUser( userObj ) {
    try {
        const [id] = await db( tableName ).insert(userObj);
        const newUser = await db(tableName ).where({ id }).first();
        return newUser;
    } catch (error) {
        console.error("Error adding user:", error);
        throw error;
    }
}

async function update(id, changes) {
    await db( tableName ).where({ id }).update(changes);
    return findById(id);
}

async function remove(id) {
    return db( tableName ).where("id", id).del();
}
