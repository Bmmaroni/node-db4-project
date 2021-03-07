
exports.seed = async function(knex) {
	await knex("recipes").insert([
		{ recipe: "Peanut Butter and Jelly" },
		{ recipe: "Popcorn" },
		{ recipe: "Cereal" }
	])
}
