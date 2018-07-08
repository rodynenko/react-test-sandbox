import React, { Component } from 'react';

class ListItem extends Component {
	render() {
		const { task, onRemove } = this.props;

		return (
			<div className='list__item'>
				{task}
				<button onClick={onRemove}>Remove</button>
			</div>
		)
	}
}

export default ListItem;
