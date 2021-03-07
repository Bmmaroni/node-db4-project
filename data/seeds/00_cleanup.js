exports.seed = async function(knex) {
	await knex("recipeDetails").truncate()
	await knex("instructions").truncate()
	await knex("ingredients").truncate()
	await knex("recipes").truncate()
}