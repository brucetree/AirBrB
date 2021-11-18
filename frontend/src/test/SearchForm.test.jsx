import SearchForm from '../components/SearchForm.jsx';
import { shallow } from 'enzyme';
import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react'

describe('<SearchForm />', () => {
  it('it includes an element which className is home_search_bar', () => {
    const wrapper = shallow(<SearchForm />);
    expect(wrapper.find('.home_search_bar').length === 1);
  });
  it('it includes one button element', () => {
    const wrapper = shallow(<SearchForm />);
    expect(
      wrapper.find('button').length === 1
    )
  });
  it('check button name', () => {
    const content = 'Search';
    const wrapper = shallow(<button type='submit' className='home_search_btn'>Search</button>);
    expect(wrapper.text()).toBe(content);
  });
  it('It can input a title', () => {
    render(<SearchForm/>)
    const input = screen.getByTestId('title');
    fireEvent.change(input, { target: { value: 'home1' } });
    expect(input.value).toBe('home1');
  });
  it('It can input a city name', () => {
    render(<SearchForm/>)
    const input = screen.getByTestId('city');
    fireEvent.change(input, { target: { value: 'Beijing' } });
    expect(input.value).toBe('Beijing');
  });
  it('It can input min price', () => {
    render(<SearchForm/>)
    const input = screen.getByTestId('price_min');
    fireEvent.change(input, { target: { value: '0' } });
    expect(input.value).toBe('0');
  });
  it('It can input max price', () => {
    render(<SearchForm/>)
    const input = screen.getByTestId('price_max');
    fireEvent.change(input, { target: { value: '900' } });
    expect(input.value).toBe('900');
  });
  it('It can input min bedrooms', () => {
    render(<SearchForm/>)
    const input = screen.getByTestId('bedrooms_min');
    fireEvent.change(input, { target: { value: '2' } });
    expect(input.value).toBe('2');
  });
  it('It can input max bedrooms', () => {
    render(<SearchForm/>)
    const input = screen.getByTestId('bedrooms_max');
    fireEvent.change(input, { target: { value: '4' } });
    expect(input.value).toBe('4');
  });
});
