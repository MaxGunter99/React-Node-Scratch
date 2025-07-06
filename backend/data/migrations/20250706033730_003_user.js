/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable( "user", users => {

        users.increments("id");
        users.uuid("uuid").defaultTo(knex.fn.uuid());
        users.string( "profileImage" );
        users.string( "username", 128 ).notNullable().unique();
        users.string("password", 128 ).notNullable();
        users.string("email", 128 ).unique();
        users.string( "displayName", 128 );
        users.enum( "role", ["default", "superuser", "banned"] ).defaultTo("default");
        users.dateTime("lastLogin");
        users.timestamp("created_at").defaultTo(knex.fn.now());

    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists( "user" )
};
