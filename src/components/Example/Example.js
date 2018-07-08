import React, { Component } from 'react';
import './Example.css';

class Example extends Component {
	state = {
		inputValue: '',
		mod: 'blue',
	};

	componentDidMount() {

	}

	componentWillUnmount() {

	}

	handleInputChange = (ev) => {
		const { target } = ev;

		this.setState({ inputValue: target.value });
	}

	changeMod = () => {
		this.setState(prevState => ({
			mod: prevState.mod === 'blue' ? 'red' : 'blue'
		}));
	};

	render() {
		const { headerText = 'Hello World' } = this.props;
		const { inputValue, mod } = this.state;

		return (
			<div className='example'>
				<h1>{headerText}</h1>
				<hr />
				<h3 className={mod}>{mod}</h3>
				<button onClick={this.changeMod}>button change mod</button>
				<hr/>
				<h3 id='input-value'>{inputValue}</h3>
				<input value={inputValue} onChange={this.handleInputChange} />
			</div>
		);
	}
}

export default Example;
