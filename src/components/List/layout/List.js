import React, { Component } from 'react';
import ListItem from '../../ListItem';

class List extends Component {

	handleRemoveItem = id => () => {
		const { removeTask } = this.props;

		removeTask(id);
	};

	render() {
		const { items } = this.props;

		return (
			<div className='list'>
				{Array.isArray(items) && items.map(t => (
					<ListItem
						key={t.id}
						onRemove={this.handleRemoveItem(t.id)}
						{...t}
					/>
				))}
			</div>
		);
	}
}

export default List;
