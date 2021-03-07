
exports.seed = async function(knex) {
	await knex("ingredients").insert([
		{ name: "Bread" },
		{ name: "Peanut Butter" },
		{ name: "Grape Jelly" },
		{ name: "Microwave Popcorn" },
		{ name: "Fruit Loops" },
		{ name: "Milk" },
	])
}
