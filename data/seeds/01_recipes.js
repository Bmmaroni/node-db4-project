
exports.seed = async function(knex) {
	await knex("recipes").insert([
		{ name: "Peanut Butter and Jelly" },
		{ name: "Popcorn" },
		{ name: "Cereal" }
	])
}
