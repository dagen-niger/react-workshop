import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Recipes from './Recipes';
import DetailRecipe from './DetailRecipe';
import { createNetworkInterface, ApolloProvider, ApolloClient  } from 'react-apollo';

const uri = 'http://localhost:3001'
const networkInterface = createNetworkInterface({ uri })
const client = new ApolloClient({ networkInterface })

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route path="/:id" component={DetailRecipe} />
        <Route exact path="/" component={Recipes} />
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
