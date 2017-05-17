/**
 * The root file that combines all of our types
 */
const Recipe = /* GraphQL */`
	type Recipe {
		title: String
		_id : ID
		vegetarian : Boolean
		ingredients : [Ingredient]
		preparations: [String]
	}
`;

const Ingredient = `
  type Ingredient {
    name : String
    _id : ID
  }
`


// TODO: Define your queries
const Query = /* GraphQL */`
	type Query {
		recipes(vegetarian: Boolean, ingredient: String): [Recipe]
		ingredients : [Ingredient]
	}
`;

const Schema = /* GraphQL */`
	schema {
		query: Query
	}
`

// TODO: Add all of your types to this array
export default [Schema, Query, Recipe, Ingredient];
