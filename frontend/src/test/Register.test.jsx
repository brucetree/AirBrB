import { shallow } from 'enzyme';
import React from 'react';
import Register from '../common/Register';
import { fireEvent, screen, render } from '@testing-library/react'

describe('<Register />', () => {
  it('it includes an element which className is log_register_page r', () => {
    const wrapper = shallow(<Register />);
    expect(wrapper.find('.log_register_page r').length === 1);
  });
  it('it includes an element which className is logo', () => {
    const wrapper = shallow(<Register />);
    expect(wrapper.find('.log_register_line title').length === 1);
  });
  it('it includes four elements which className is log_register_line', () => {
    const wrapper = shallow(<Register />);
    expect(wrapper.find('.log_register_line').length === 4);
  });
  it('it includes four elements which className is log_register_tag', () => {
    const wrapper = shallow(<Register />);
    expect(wrapper.find('.log_register_tag').length === 4);
  });
  it('check button name', () => {
    const content = 'Register';
    const wrapper = shallow(<button className='lr_btn'>Register</button>);
    expect(wrapper.text()).toBe(content);
  });
  it('it includes one button element', () => {
    const wrapper = shallow(<Register />);
    expect(
      wrapper.find('button').length === 1
    )
  });
  it('it includes an button which can be clicked', () => {
    const onClick = jest.fn();
    shallow(<button onClick={onClick} className='lr_btn'>Register</button>).simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('It should input a email', () => {
    render(<Register/>)
    const input = screen.getByTestId('email');
    fireEvent.change(input, { target: { value: 'mia@unsw.edu.au' } });
    expect(input.value).toBe('mia@unsw.edu.au');
  });
  it('It should input a name', () => {
    render(<Register/>)
    const input = screen.getByTestId('name');
    fireEvent.change(input, { target: { value: 'mia' } });
    expect(input.value).toBe('mia');
  });
  it('It should input a password', () => {
    render(<Register/>)
    const input = screen.getByTestId('password');
    fireEvent.change(input, { target: { value: '12345' } });
    expect(input.value).toBe('12345');
  });
  it('It should input a confirm password', () => {
    render(<Register/>)
    const input = screen.getByTestId('confirm');
    fireEvent.change(input, { target: { value: '12345' } });
    expect(input.value).toBe('12345');
  });
});
