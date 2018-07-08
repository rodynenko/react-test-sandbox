import React, { Component } from 'react';

class ListItem extends Component {
	render() {
		const { task, onRemove } = this.props;

		return (
			<div>
				{task}
				<button onClick={onRemove}>Remove</button>
			</div>
		)
	}
}

export default ListItem;
