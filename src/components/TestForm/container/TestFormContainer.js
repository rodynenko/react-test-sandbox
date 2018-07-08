import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import TestForm from '../layout/TestForm';
import { addTask } from '../../../reducers/todo';

export default connect(null, {
	addTask
})(reduxForm({
	form: 'form',
})(TestForm));
