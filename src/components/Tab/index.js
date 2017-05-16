import React, { Children } from 'react';
import Title from './Title'
import Content from './Content'

const Tab = ({ children, index, onClick, selected }) => {
	// TODO: Render title and content of the tab here
    const arr = React.Children.toArray(children)
    const title = arr.find(elem => elem.type === Title)
    const content = arr.filter(elem => elem.type === Content)
    return (
        <div>
            {React.cloneElement(title, { index, onClick })}
            {selected && content}
        </div>
    )
}

export default Tab;
