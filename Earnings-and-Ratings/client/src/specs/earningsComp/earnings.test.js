import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Earnings from './earnings.js';

describe('component: Earnings', () => {
  const defaultProps = {
    estimatedEarnings: ['1Q 2017', '$1.00', '2Q 2017', '$ 1.23', '3Q 2017', '$1.30'],
    actualEarnings: ['1Q 2017', '$1.05', '2Q 2017', '$ 1.20', '3Q 2017', '$1.22']
  };


  it('should render initial layout', () => {
    let wrapper = shallow(<Earnings {...defaultProps} />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it('After component updated, it should produce yRange in a $XX.XX format string', () => {
    setTimeout(() => {
      let wrapper = shallow(<Earnings {...defaultProps} />);
      let yRange = wrapper.state().yRange;
      let formatCheck = yRange.reduce((accum, element) => {
        if (accum === false) { return false; }
        let dollar = element[0] === '$';
        let dot = element.substring(element.length - 3)[0] === '.';
        if (dollar === true || dot === true) {
          return true;
        }
        return false;
      }, true);

      expect(formatCheck).toEqual(true);
    }, 0);
  });

  it('Given props, produces correct state upon component update', () => {
    setTimeout(() => {
      let wrapper = shallow(<Earnings {...defaultProps} />);
      let yRange = wrapper.state().yRange;
      let xDates = wrapper.state().xDates;
      expect(yRange).toEqual(['$1.00', '$1.10', '$1.20', '$1.30']);
      expect(xDates).toEqual(['1Q 2017', '2Q 2017', '3Q 2017']);
    }, 0);
  });

  it('should render elements in the component', () => {
    let wrapper = shallow(<Earnings {...defaultProps} />);
    expect(wrapper.find('#earningsComponent').length).toEqual(1);
    expect(wrapper.find('.axes').length).toEqual(1)
  })
});
