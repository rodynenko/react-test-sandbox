import {
	REMOVE_TASK,
	ADD_TASK,
	UPDATE_STATUS_TASK,
	UPDATE_TEXT_TASK,
} from '../store/constants';
import uuid from 'uuid/v1';

// actionCreators
export const addTask = (taskText) => ({
	type: ADD_TASK,
	taskText
});

export const removeTask = (taskId) => ({
	type: REMOVE_TASK,
	taskId
});

export const updateTaskStatus = (taskId) => ({
	type: UPDATE_STATUS_TASK,
	taskId
})

export const updateTaskText = (taskId, taskText) => ({
	type: UPDATE_TEXT_TASK,
	taskId,
	taskText,
});

// initialState
const initialState = {
	todos: [],
};

// actionHandlers
const actionHandlers = {
	[ADD_TASK]: (state, action) => {
		const { taskText } = action;
		const newTask = {
			id: uuid(),
			task: taskText,
			isActive: true,
		};

		return { ...state, todos: state.todos.concat([newTask]) };
	},
	[REMOVE_TASK]: (state, action) => {
		const { taskId } = action;

		return { ...state, todos: state.todos.filter((t => t.id !== taskId)) }
	},
	[UPDATE_STATUS_TASK]: (state, action) => {
		const { taskId } = action;

		return {
			...state,
			todos: state.todos.reduce((prev, t) => {
				if (t.id === taskId) t.isActive = !t.isActive;

				return prev.concat([t]);
			}, [])
		}
	},
	[UPDATE_TEXT_TASK]: (state, action) => {
		const { taskId, taskText } = action;

		return {
			...state,
			todos: state.todos.reduce((prev, t) => {
				if (t.id === taskId) t.task = taskText;

				return prev.concat([t]);
			}, [])
		}
	}
};

const reducer = (state = initialState, action) => {
	const handler = actionHandlers[action.type];
	return handler ? handler(state, action) : state;
};

export default reducer;
