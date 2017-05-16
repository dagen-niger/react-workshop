import React from 'react';

const withDefaultCountPropNine = component =>
    props => React.createElement(component, {
        count : props.count || 9
    })

export default withDefaultCountPropNine