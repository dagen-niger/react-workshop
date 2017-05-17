/**
 * The root file that combines all of our types
 */
import Recipe from './Recipe';
import Ingredient from './Ingredient';

const Query = /* GraphQL */`
  type Query {
    recipes(vegetarian: Boolean, ingredient: String): [Recipe!]
    ingredients: [Ingredient!]
  }
`;

const RecipeInput = /* GraphQL */`
  input RecipeInput {
    title: String
    vegetarian: Boolean
    ingredients: [ID]
    preparation: [String]
  }
`

// TODO: Define your mutations
const Mutation = /* GraphQL */`
  type Mutation {
    addRecipe(recipe : RecipeInput) : Recipe
    addIngredient(
      name : String
    ) : Ingredient
  }
`

const Schema = /* GraphQL */`
  schema {
    query: Query
    mutation: Mutation
  }
`

export default [Schema, Mutation, Query, Recipe, Ingredient, RecipeInput];
