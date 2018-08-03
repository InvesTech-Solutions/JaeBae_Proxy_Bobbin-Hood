import React from 'react';
import { shallow, mount, render } from 'enzyme';
import XAxis from './xAxis.js';

describe('component: Earnings.description', () => {
 let wrapper;
 const defaultProps = {
    dates: ['4Q 2016', '1Q 2017', '2Q 2017']
  }

  beforeEach(()=> {
    wrapper = shallow(<XAxis {...defaultProps} />);
  });

  it('should render the component', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should render xlabel', () => {
    expect(wrapper.find('.xlabel').length).toEqual(1);
  });
});
