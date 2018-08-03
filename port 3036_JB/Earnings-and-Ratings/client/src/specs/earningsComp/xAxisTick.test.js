import React from 'react';
import { shallow, mount, render } from 'enzyme';
import XAxisTick from './xAxisTick.js';

describe('component: Earnings.description', () => {
 let wrapper;
 const defaultProps = {
    xValue: '4Q 2016',
    ind: 1
  }

  beforeEach(()=> {
    wrapper = shallow(<XAxisTick {...defaultProps} />);
  });

  it('should render the component', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should render x tick', () => {
    expect(wrapper.find('.x-1').length).toEqual(1);
    expect(wrapper.find('.x1').length).toEqual(1);
  });
});
