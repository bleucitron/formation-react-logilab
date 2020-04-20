import React from 'react';
import { shallow, mount } from 'enzyme';
import Filter from './Filter';

describe('<Filter>', () => {
  it('renders without crashing', () => {
    const cb = jest.fn();
    shallow(<Filter text='Filter' filter={cb} />);
  });

  it('matches shallow snapshot', () => {
    const cb = jest.fn();
    const wrapper = shallow(<Filter text='Filter' filter={cb} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('matches complete snapshot', () => {
    const cb = jest.fn();
    const wrapper = mount(<Filter text='Filter' filter={cb} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('calls filter cb on click', () => {
    const cb = jest.fn();
    const wrapper = shallow(<Filter text='Filter' filter={cb} />);

    wrapper.simulate('click');

    expect(cb).toHaveBeenCalledTimes(1);
  });
});
