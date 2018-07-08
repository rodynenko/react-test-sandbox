import { required, length } from "redux-form-validators";

export default {
	form: {
		task: [required(), length({ min: 3 })]
	}
};
