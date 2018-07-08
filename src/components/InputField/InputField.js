import React from "react";
import "./InputField.css";

const InputField = props => {
	const {
		input,
		type,
		label,
		placeholder,
		meta: { touched, error, submitting }
	} = props;

	return (
		<div className="input-field__wrap">
			{label && <label className="input-field__label">{label}</label>}
			<input
				className="input-field"
				placeholder={placeholder}
				type={type}
				readOnly={submitting}
				{...input}
			/>
			{touched && error && <div className="input-field__error">{error}</div>}
		</div>
	);
};

InputField.defaultProps = {
	type: "text"
};

export default InputField;
