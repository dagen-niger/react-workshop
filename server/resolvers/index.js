import { getRecipes } from '../models/Recipe'
import { getIngredient } from '../models/Ingredient'
/**
 * The root file that combines all of our resolvers
 */

// TODO: Write your resolvers
export default {
	Query: {
		recipes: (root, params) => getRecipes(params),
    ingredients: (root, params) => getRecipes(params),
	},
	Recipe: {
		ingredients : ({ ingredients }) =>
			ingredients.map(ingredient => getIngredient(ingredient))
	}
};
