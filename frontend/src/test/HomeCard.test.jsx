import HomeCard from '../components/HomeItems.jsx';
import { shallow } from 'enzyme';
import React from 'react';

describe('<HomeCard />', () => {
  it('it includes an element which className is home_card_img', () => {
    const wrapper = shallow(<HomeCard />);
    expect(wrapper.find('.home_card_img').length === 1);
  });
  it('it includes an element which className is home_card_line title', () => {
    const wrapper = shallow(<HomeCard />);
    expect(wrapper.find('.home_card_line title').length === 1);
  });
  it('check tag name', () => {
    const content = 'Price';
    const wrapper = shallow(<div className = "home_card_line_tag">Price</div>);
    expect(wrapper.text()).toBe(content);
  });
  it('check tag name', () => {
    const content = 'City';
    const wrapper = shallow(<div className = "home_card_line_tag">City</div>);
    expect(wrapper.text()).toBe(content);
  });
  it('check tag name', () => {
    const content = 'Bedrooms';
    const wrapper = shallow(<div className = "home_card_line_tag">Bedrooms</div>);
    expect(wrapper.text()).toBe(content);
  });
  it('check tag name', () => {
    const content = 'Beds';
    const wrapper = shallow(<div className = "home_card_line_tag">Beds</div>);
    expect(wrapper.text()).toBe(content);
  });
  it('check tag name', () => {
    const content = 'Reviews';
    const wrapper = shallow(<div className = "home_card_line_tag">Reviews</div>);
    expect(wrapper.text()).toBe(content);
  });
  it('check tag name', () => {
    const content = 'Rating';
    const wrapper = shallow(<div className = "home_card_line_tag">Rating</div>);
    expect(wrapper.text()).toBe(content);
  });
});
