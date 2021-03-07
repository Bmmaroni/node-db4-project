
exports.seed = async function(knex) {
	await knex("ingredients").insert([
		{ ingredient: "Bread" },
		{ ingredient: "Peanut Butter" },
		{ ingredient: "Grape Jelly" },
		{ ingredient: "Microwave Popcorn" },
		{ ingredient: "Fruit Loops" },
		{ ingredient: "Milk" },
	])
}
