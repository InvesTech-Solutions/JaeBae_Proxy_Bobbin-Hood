import React from 'react';
import { shallow, mount, render } from 'enzyme';
import YAxisTick from './yAxisTick.js';

describe('component: Earnings.description', () => {
 let wrapper;
 const defaultProps = {
    yValue: '$0.40',
    ind: 1
  }

  beforeEach(()=> {
    wrapper = shallow(<YAxisTick {...defaultProps} />);
  });

  it('should render the component', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should render y tick', () => {
    expect(wrapper.find('.y-1').length).toEqual(1);
    expect(wrapper.find('.y1').length).toEqual(1);
  });
});
