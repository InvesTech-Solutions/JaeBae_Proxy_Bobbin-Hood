import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Tag from './tag.js';

describe('component: Earnings.description', () => {
 let wrapper;
 const defaultProps = {
    percent : 34,
    total : 100
  }

  beforeEach(()=> {
    wrapper = shallow(<Tag {...defaultProps} />);
  });

  it('should render the component', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should render the tag svg', () => {
    expect(wrapper.find('path').length).toEqual(1)
  });
});
