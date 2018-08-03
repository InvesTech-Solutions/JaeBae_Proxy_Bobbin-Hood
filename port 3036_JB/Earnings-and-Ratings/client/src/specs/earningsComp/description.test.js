import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Description from './description.js';

describe('component: Earnings.description', () => {
 let wrapper;
 const defaultProps = {
    estimate: '$1.00',
    actual: '$1.05'
  }

  beforeEach(()=> {
    wrapper = shallow(<Description {...defaultProps} />);
  });

  it('should render the component', () => {
    expect(wrapper.exists()).toEqual(true)
  });

  it('should render all features', () => {
    expect(wrapper.find('.descCircle').length).toEqual(2);
    expect(wrapper.find('.descText').length).toEqual(2);
    expect(wrapper.find('.botText').length).toEqual(2);
  });
});
