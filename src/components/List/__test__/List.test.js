import React from 'react';
import List from '../layout/List';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<List />', () => {
	it('component exists', () => {
		const wrapper = shallow(<List />);
		expect(wrapper.find('.list').length).toBe(1);
	});

	it('remove action is correct', () => {
		const props = {
			removeTask: jest.fn(),
			items: [
				{
					id: '1',
					task: 'default task'
				}
			]
		};

		const wrapper = mount(<List {...props} />);
		expect(wrapper.props().items.length).toBe(1);
		wrapper.find('.list__item').at(0).find('button').simulate('click');
		expect(props.removeTask).toHaveBeenCalledWith('1');
	});
})
