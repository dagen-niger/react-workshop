import React, { Children, cloneElement } from 'react';
import Tab from './Tab'

class TabGroup extends React.Component {

	constructor() {
		super()
        this.handleClick = this.handleClick.bind(this)
	}

	state = {
		selected : null,
	}

    /**
	 *
     * @param {boolean} selected
     */
    handleClick(selected) {
		this.setState({ selected })
	}

	renderTabs(list) {
        return Children.map(list, (elem, index) => {
            const selected = index === this.state.selected
            const onClick = this.handleClick
            return React.cloneElement(elem, { selected, index, onClick })
        })
	}

	render() {
		const { children } = this.props
		return (
			<div>
				{this.renderTabs(children)}
			</div>
		)
	}
}

export default TabGroup;
