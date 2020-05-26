import React from 'react';
import { mount, shallow } from 'enzyme';
import Tweet from './Tweet';
import tweets from './data/tweets.json';

describe('Tweet', () => {
  it('should not crash on mount', () => {
    mount(<Tweet {...tweets[0]} />);
  });

  it('should match snapshots', () => {
    const wrapper = shallow(<Tweet {...tweets[0]} />);

    expect(wrapper).toMatchSnapshot();
  });
});
