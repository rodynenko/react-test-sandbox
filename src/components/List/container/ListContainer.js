import { connect } from 'react-redux';
import { removeTask } from '../../../reducers/todo';
import List from '../layout/List';

export default connect(state => ({
	items: state.todo.todos,
}), {
	removeTask
})(List);
