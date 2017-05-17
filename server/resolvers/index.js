import { getRecipes } from '../models/Recipe'
import { getIngredient } from '../models/Ingredient'
/**
 * The root file that combines all of our resolvers
 */

// TODO: Write your resolvers
export default {
	Query: {
		recipes: (root, { vegetarian, ingredient }) =>
			getRecipes({ vegetarian, ingredient })
	},
	Recipe: {
		ingredients : recipe =>
			recipe.ingredients.map(ingredient =>
				getIngredient(ingredient)
			)
	}
};
