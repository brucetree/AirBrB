import { shallow } from 'enzyme';
import React from 'react';
import Navbar from '../components/NavBar';

describe('<Navbar />', () => {
  it('it includes an element which className is nav_bar', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('.nav_bar').length === 1);
  });
  it('it includes an element which className is logo', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('.logo').length === 1);
  });
  it('check button name', () => {
    const content = 'Home';
    const wrapper = shallow(<button className="btn_nav">Home</button>);
    expect(wrapper.text()).toBe(content);
  });
  it('check button name', () => {
    const content = 'Host List';
    const wrapper = shallow(<button className="btn_nav">Host List</button>);
    expect(wrapper.text()).toBe(content);
  });
  it('check button name', () => {
    const content = 'Create';
    const wrapper = shallow(<button className="btn_nav">Create</button>);
    expect(wrapper.text()).toBe(content);
  });
  it('check button name', () => {
    const content = 'Logout';
    const wrapper = shallow(<button className="btn_nav">Logout</button>);
    expect(wrapper.text()).toBe(content);
  });
  it('check button name', () => {
    const content = 'Login';
    const wrapper = shallow(<button className="btn_nav">Login</button>);
    expect(wrapper.text()).toBe(content);
  });
  it('check button name', () => {
    const content = 'Register';
    const wrapper = shallow(<button className="btn_nav">Register</button>);
    expect(wrapper.text()).toBe(content);
  });
  it('navbar includes one img elements', () => {
    const wrapper = shallow(<Navbar />);
    expect(
      wrapper.find('img').length === 1
    )
  });
  it('navbar includes six button elements', () => {
    const wrapper = shallow(<Navbar />);
    expect(
      wrapper.find('button').length === 6
    )
  });
  it('navbar includes six link elements', () => {
    const wrapper = shallow(<Navbar />);
    expect(
      wrapper.find('link').length === 6
    )
  });
});
