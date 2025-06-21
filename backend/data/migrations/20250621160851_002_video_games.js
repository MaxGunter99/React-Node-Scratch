/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("videoGames", (table) => {
		table.increments("id");
		table.uuid("uuid").defaultTo(knex.fn.uuid());
		table.text("name").notNullable();
		table
			.enum("platform", [
				"pc",
				"steam_deck",
				"mobile",
				"xbox_360",
				"xbox_one",
				"xbox_series_s",
				"xbox_series_x",
				"switch",
				"switch_2",
				"wii",
				"ds",
				"3ds",
				"ps2",
				"ps3",
				"ps4",
				"ps5",
				"other",
			])
			.notNullable()
			.defaultTo("other");

		table.enum("rating", ["", "*", "**", "***", "****", "*****"]).notNullable().defaultTo("");

		table.string("genre", 50);
		table.string("cover_image_url", 500);
		table.string("external_url", 500);
		table.boolean("favorite").defaultTo(false);
		table.string("comments", 1000);
		table.boolean("completed").defaultTo(false);
		table.boolean("replayable").defaultTo(false);
		table.date("started_at");
		table.date("finished_at");
		table.timestamp("created_at").defaultTo(knex.fn.now());

		// LETS MAKE IT SEARCHABLE
		table.index("platform");
		table.index("rating");
		table.index("favorite");
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTableIfExists("videoGames");
};
