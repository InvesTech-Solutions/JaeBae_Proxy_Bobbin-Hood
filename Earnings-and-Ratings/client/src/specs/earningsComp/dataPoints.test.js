import React from 'react';
import { shallow, mount, render } from 'enzyme';
import DataPoints from './dataPoints.js';

describe('component: Earnings.description branch1', () => {
 let wrapper;
 const defaultProps = {
    estimate: ['4Q2016', '$0.40', '1Q2017', '$0.45', '2Q2017', '$0.60'],
    actual: ['4Q2016', '$0.46', '1Q2017', '$0.48', '2Q2017', '$0.58'],
    yRange: ['$0.40', '$0.50', '$0.60', '$0.60']
  }

  beforeEach(()=> {
    wrapper = shallow(<DataPoints {...defaultProps} />);
  });

  it('should render the component', () => {
    expect(wrapper.exists()).toEqual(true)
  });

  it('should correctly process states after component is updated', () => {
    setTimeout(() => {
      expect(wrapper.state().estimate).toEqual(['$0.40', '$0.45', '$0.60']);
      expect(wrapper.state().actual).toEqual(['$0.46', '$0.48', '$0.58']);
    }, 0);
  });

  it('should render avg board', () => {
    expect(wrapper.find('svg').length).toEqual(1);
  });
});