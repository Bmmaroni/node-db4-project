
exports.up = async function(knex) {
	await knex.schema.createTable("recipes", (table) => {
		table.increments("id")
		table.text("recipe").notNull().unique()
	})

	await knex.schema.createTable("ingredients", (table) => {
		table.increments("id")
		table.text("ingredient").notNull().unique()
	})

	await knex.schema.createTable("instructions", (table) => {
		table.increments("id")
		table.text('step').notNull().unique()
		table.integer("step_number").notNull()
		table.integer("recipe_id").notNull().references("id").inTable("recipes").onDelete("CASCADE").onUpdate("CASCADE")
	})

	await knex.schema.createTable("recipeDetails", (table) => {
		table.increments("id")
		table.integer("recipe_id").notNull().references("id").inTable("recipes").onDelete("CASCADE").onUpdate("CASCADE")
		table.integer("ingredient_id").notNull().references("id").inTable("ingredients").onDelete("CASCADE").onUpdate("CASCADE")
		table.integer("quantity").notNull()
	})
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("recipeDetails")
	await knex.schema.dropTableIfExists("instructions")
	await knex.schema.dropTableIfExists("ingredients")
	await knex.schema.dropTableIfExists("recipes")
}
