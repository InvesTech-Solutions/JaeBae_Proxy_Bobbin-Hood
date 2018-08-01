import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './app.js';

describe('component: App', () => {
  it('should render initial layout', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it('should not have any preexisting data loaded for the app', () => {
    let wrapper = shallow(<App />);
    let loadState = wrapper.state().exampleDataLoaded;
    expect(loadState).toEqual(false);
  });

  it('should load data from the database once component was loaded', () => {
    let wrapper = shallow(<App />);
    setTimeout(() => {
      let loadState = wrapper.state().exampleDataLoaded;
      expect(loadState).toEqual(true);
    }, 0);
  });
});
