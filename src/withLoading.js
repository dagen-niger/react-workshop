import React from 'react';
import { compose, branch, renderComponent } from 'recompose';

const Spinner = () => <div>Loading…</div>

const enhance = compose(
  branch(
    props => props.loading,
    renderComponent(Spinner),
  ),
)

export default Component => enhance(Component)