
exports.seed = async function(knex) {
	await knex("recipeDetails").insert([
		{recipe_id: 1, ingredient_id: 1, quantity: "2 slices"},
		{recipe_id: 1, ingredient_id: 2, quantity: "3 tablespoons"},
		{recipe_id: 1, ingredient_id: 3, quantity: "2 tablespoons"},
		{recipe_id: 2, ingredient_id: 4, quantity: "1 package"},
		{recipe_id: 3, ingredient_id: 5, quantity: "3 cups"},
		{recipe_id: 3, ingredient_id: 6, quantity: "2 cups"},
	])
}
