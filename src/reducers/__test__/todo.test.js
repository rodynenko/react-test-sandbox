import todoReducer, { addTask, removeTask } from '../todo.js';

describe('todos reducer', () => {
	it('should add task', () => {
		const text = "Hello";
		const newState = todoReducer({ todos: [] }, addTask(text));

		expect(newState.todos.length).toBe(1);
		expect(newState.todos[0].task).toBe(text);
	});

	it('should remove task', () => {
		const id = 1;
		const initialState = {
			todos: [
				{
					id,
					task: 'hello',
				}
			]
		};
		const newState = todoReducer(initialState, removeTask(id));

		expect(newState.todos.length).toBe(0);
	});
});
