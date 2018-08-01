import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Summary from './summary.js';

describe('component: Earnings.description', () => {
 let wrapper;
 const defaultProps = {
    ratings: ['4Q 2016', '1Q 2017', '2Q 2017'],
    buySummary: 'abcdefghijklmnopqrstuvwxyz',
    sellSummary: 'acegikmoqsuwybdfhjlnprtvxz'
  }

  beforeEach(()=> {
    wrapper = shallow(<Summary {...defaultProps} />);
  });

  it('should render the component', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should render summary component section', () => {
    expect(wrapper.find('#summaryComponent').length).toEqual(1)
  });
});
