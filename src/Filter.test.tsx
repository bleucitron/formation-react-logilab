import React from 'react';
import { shallow } from 'enzyme';
import Filter from './Filter';

describe('Filter', () => {
  it('should not crash on mount', () => {
    const f = jest.fn();
    shallow(<Filter label='Text' handleClick={f} />);
  });

  it('should match snapshots', () => {
    const f = jest.fn();
    const wrapper = shallow(<Filter label='Text' handleClick={f} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should have the label as text in the button', () => {
    const f = jest.fn();
    const wrapper = shallow(<Filter label='Text' handleClick={f} />);

    expect(wrapper.text()).toBe('Text');
    // expect(wrapper.find('button').text()).toBe('Text');
  });

  it('should execute the handleClick cb when clicked', () => {
    const f = jest.fn();
    const wrapper = shallow(<Filter label='Text' handleClick={f} />);

    wrapper.simulate('click');

    expect(f).toHaveBeenCalledTimes(1);
  });
});
