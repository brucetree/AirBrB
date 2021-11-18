import ListingCreate from '../pages/ListingCreate.jsx';
import { shallow } from 'enzyme';
import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react'

describe('<ListingCreate />', () => {
  it('it includes an element which className is create_edit_page', () => {
    const wrapper = shallow(<ListingCreate />);
    expect(wrapper.find('.create_edit_page').length === 1);
  });
  it('it includes 3 button elements', () => {
    const wrapper = shallow(<ListingCreate />);
    expect(
      wrapper.find('button').length === 3
    )
  });
  it('check button name', () => {
    const content = 'Create Listing';
    const wrapper = shallow(<button>Create Listing</button>);
    expect(wrapper.text()).toBe(content);
  });
  it('check button name', () => {
    const content = 'Add bedroom';
    const wrapper = shallow(<button>Add bedroom</button>);
    expect(wrapper.text()).toBe(content);
  });
  it('check button name', () => {
    const content = 'Remove bedroom';
    const wrapper = shallow(<button>Remove bedroom</button>);
    expect(wrapper.text()).toBe(content);
  });
  it('It can input a title', () => {
    render(<ListingCreate/>)
    const input = screen.getByTestId('title_create');
    fireEvent.change(input, { target: { value: 'home1' } });
    expect(input.value).toBe('home1');
  });
  it('It can set type', () => {
    render(<ListingCreate/>)
    const select = screen.getByTestId('type_create');
    fireEvent.change(select, { target: { value: 'Hotel' } });
    expect(select.value).toBe('Hotel');
  });
});
