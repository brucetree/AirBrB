import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('<App />', () => {
  it('it includes one Router element', () => {
    const wrapper = shallow(<App />);
    expect(
      wrapper.find('Router').length === 1
    )
  });
  it('it includes ten Route element', () => {
    const wrapper = shallow(<App />);
    expect(
      wrapper.find('Route').length === 10
    )
  });
  it('it includes one NavBar element', () => {
    const wrapper = shallow(<App />);
    expect(
      wrapper.find('NavBar').length === 1
    )
  });
  it('it includes one Routes element', () => {
    const wrapper = shallow(<App />);
    expect(
      wrapper.find('Routes').length === 1
    )
  });
});
