import React, { Children } from 'react';

export default ({ children, onClick, index }) => (
    <button onClick={() => onClick(index)}>
        { children }
    </button>
)
