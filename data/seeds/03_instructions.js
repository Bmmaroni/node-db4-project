
exports.seed = async function(knex) {
	await knex("instructions").insert([
		{ step: "Put slices of bread on plate", step_number: 1, recipe_id: 1 },
		{ step: "Grab knife and spread Peanut Butter on one slice of bread", step_number: 2, recipe_id: 1 },
		{ step: "Spread Grape Jelly on the other slice of bread", step_number: 3, recipe_id: 1 },
		{ step: "Put slice of bread together and enjoy", step_number: 4, recipe_id: 1 },
		{ step: "Unwrap popcorn and place in microware", step_number: 1, recipe_id: 2},
		{ step: "Cook in microwave for 2 minutes and listen for two seconds between pops", step_number: 2, recipe_id: 2 },
		{ step: "Open popcorn bag safely and pour into bowl and enjoy", step_number: 3, recipe_id: 2 },
		{ step: "Grab your box of Fruit Loops and open it up", step_number: 1, recipe_id: 3 },
		{ step: "Grab a bowl and pour Fruit Loops into bowl", step_number: 2, recipe_id: 3 },
		{ step: "Grab milk and pour into bowl with cereal and enjoy", step_number: 3, recipe_id: 3 },
	])
}
