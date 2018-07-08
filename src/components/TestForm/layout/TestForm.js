import React, { Component } from 'react';
import { Field } from 'redux-form';
import InputField from '../../InputField';
import validateForm from '../../../helpers/validateForm';

class TestForm extends Component {
	onFormSubmit = data => validateForm('form', data)
		.then(() => {
			const { addTask } = this.props;

			addTask(data.task);

			const { reset } = this.props;
			if (reset) reset();
		});

	render() {
		const { handleSubmit } = this.props;

		return (
			<form className='task-form' onSubmit={handleSubmit(this.onFormSubmit)}>
				<Field
					name='task'
					placeholder='Enter task'
					component={InputField}
				/>
				<button type='submit'>Add</button>
			</form>
		);
	}
}

export default TestForm;
