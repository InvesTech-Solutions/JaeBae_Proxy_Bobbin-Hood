import React from 'react';
import { shallow, mount, render } from 'enzyme';
import DataPoint from './dataPoint.js';

describe('component: Earnings.description', () => {
 let wrapper;
 const defaultProps = {
    estimate: '$0.40',
    actual: '$0.46',
    ind: 1,
    yRange: ['$0.40', '$0.50', '$0.60', '$0.60']
  }

  beforeEach(()=> {
    wrapper = shallow(<DataPoint {...defaultProps} />);
  });

  it('should render the component', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should render 2 data points', () => {
    expect(wrapper.find('circle').length).toEqual(2);
  });
});
