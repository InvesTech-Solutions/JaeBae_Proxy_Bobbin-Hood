import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PercentBar from './percentBar.js';

describe('component: Earnings.description', () => {
 let wrapper;
 const defaultProps = {
    suggestion : 'Buy',
    count : 30,
    total :100
  }

  beforeEach(()=> {
    wrapper = shallow(<PercentBar {...defaultProps} />);
  });

  it('should render the component', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should render barRow', () => {
    expect(wrapper.find('.barRow').length).toEqual(1)
  });
});
