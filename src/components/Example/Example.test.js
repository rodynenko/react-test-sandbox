import React from 'react';
import Example from './Example';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<Example /> basic test', () => {
	it('component exists', () => {
		const wrapper = shallow(<Example />);
		expect(wrapper.find('.example').length).toBe(1);
	});

	it('component handle props correct', () => {
		const wrapper = shallow(<Example headerText='Test' />);
		expect(wrapper.find('h1').text()).toBe('Test');
	})

	/*
	Selector's types:

	wrapper.find('h2 ~ p') // class, tags, id selectors like css
	wrapper.find('[text="Title"]') // text is a prop of some component
	wrapper.find({ alt: 'logo' }) // object of props/attributes
	wrapper.find(function (app) { ... return }) // function to find node
	*/

	it('handle selectors correctly', () => {
		const wrapper = shallow(<Example />);
		expect(wrapper.find('hr').length).toBe(2);
		expect(wrapper.find('.blue').length).toBe(1);
		expect(wrapper.find('[id="input-value"]').length).toBe(1);
	});

	it('get snapshot', () => {
		const wrapper = shallow(<Example />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('mount snapshot', () => {
		const wrapper = mount(<Example />);
		expect(toJson(wrapper)).toMatchSnapshot();
		wrapper.unmount();
	});

	it('handle state change', () => {
		const wrapper = shallow(<Example />);
		const button = wrapper.find('button');
		const input = wrapper.find('input');

		// button click simulation
		expect(wrapper.find('.blue').length).toBe(1);
		button.simulate('click');
		expect(wrapper.find('.blue').length).toBe(0);
		expect(wrapper.find('.red').length).toBe(1);

		// input change simulation
		expect(wrapper.find('#input-value').text()).toBe('');
		input.simulate('change', { target: { value: 'Hello' } });
		expect(wrapper.find('#input-value').text()).toBe('Hello');

		// direct setState
		wrapper.setState({ mod: 'blue' });
		expect(wrapper.find('.blue').length).toBe(1);
		expect(wrapper.find('.red').length).toBe(0);
	});
});

describe('<Example> handle lifecycle methods', () => {
	it('handle ComponentDidMount', () => {
		jest.spyOn(Example.prototype, 'componentDidMount');
		const wrapper = shallow(<Example />);
		expect(Example.prototype.componentDidMount.mock.calls.length).toBe(1);
	});

	it('handle ComponentWillUnmount', () => {
		jest.spyOn(Example.prototype, 'componentWillUnmount');
		const wrapper = mount(<Example />);
		wrapper.unmount();
		expect(Example.prototype.componentWillUnmount.mock.calls.length).toBe(1);
	});

	it('handle custom methods', () => {
		const wrapper = shallow(<Example />);
		wrapper.instance().changeMod();
		expect(wrapper.instance().state.mod).toBe('red');
	});
});
