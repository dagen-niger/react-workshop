import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose, withState } from 'recompose';

const AddIngredient = ({ name, setName, addIngredient, successMessage }) => (
  <form onSubmit={addIngredient}>
    <input
      type="text"
      value={name}
      onChange={({ target }) => {
        setName(target.value);
      }}
    />
    <button type="submit">Create Ingredient</button>
    {successMessage || <div>{successMessage}</div>}
  </form>
);

const addIngredientMutation = gql`
  mutation addIngredient($name: String!) {
    addIngredient(name: $name) {
      _id
      name
    }
  }
`

const enhance = compose(
  withState('name', 'setName', ''),
  withState('successMessage', 'setSuccessMessage', ''),
  withHandlers({
    'addIngredient' : ({ ownProps, mutate }) => event => {
      event.preventDefault()
      mutate({
        variables: { name: ownProps.name }
      }).then(response => {
        console.log('RESPONSE', response)
      })
    }
  }),
  graphql(addIngredientMutation),
);

export default enhance(AddIngredient);
