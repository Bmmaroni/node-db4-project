const db = require("../data/config")

const getRecipes = async () => {
	const recipes = db("recipes as r")
	return recipes
}

function getShoppingList(recipe_id) {
	return db("quanity", "ingredient").from("recipeDetails as rd")
		.join("ingredients as i", "rd.ingredient_id", "i.id")
		.where("rd.id", recipe_id)
}

function getInstructions(recipe_id) {
	return db("step_number", "step").from("instructions as i")
		.where('i.recipe_id', recipe_id)
		.orderBy("i.step_number")
}

module.exports = {
	getRecipes,
	getShoppingList,
	getInstructions
} 