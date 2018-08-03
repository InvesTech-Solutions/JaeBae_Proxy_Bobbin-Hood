import React from 'react';
import { shallow, mount, render } from 'enzyme';
import YAxis from './yAxis.js';

describe('component: Earnings.description', () => {
 let wrapper;
 const defaultProps = {
    yRange: ['$0.40', '$0.50', '$0.60', '$0.60']
  }

  beforeEach(()=> {
    wrapper = shallow(<YAxis {...defaultProps} />);
  });

  it('should render the component', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should render ylabel', () => {
    expect(wrapper.find('.ylabel').length).toEqual(1)
  });
});
