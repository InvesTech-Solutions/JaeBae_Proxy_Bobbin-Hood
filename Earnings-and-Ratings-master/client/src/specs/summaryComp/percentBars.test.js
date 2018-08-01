import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PercentBars from './percentBars.js';

describe('component: Earnings.description', () => {
 let wrapper;
 const defaultProps = {
    dates: ['4Q 2016', '1Q 2017', '2Q 2017']
  }

  beforeEach(()=> {
    wrapper = shallow(<PercentBars {...defaultProps} />);
  });

  it('should render the component', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should render bars', () => {
    expect(wrapper.find('.bars').length).toEqual(1)
  });
});
