import React from 'react';

const withDefaultCountProp = (component, defaultCount) =>
    props => {
        const count = props.count || defaultCount
        return React.createElement(component, { count })
    }


export default withDefaultCountProp