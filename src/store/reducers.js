import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import todoReducer from '../reducers/todo';

export default combineReducers({
	todo: todoReducer,
	form: reducer,
});
