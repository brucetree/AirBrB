import { shallow } from 'enzyme';
import React from 'react';
import ListingPublish from '../components/ListingPublish';

describe('<ListingPublish />', () => {
  it('it includes an element which className is booking_page center', () => {
    const wrapper = shallow(<ListingPublish />);
    expect(wrapper.find('.booking_page center').length === 1);
  });
  it('it includes two element which className is booking_btn', () => {
    const wrapper = shallow(<ListingPublish />);
    expect(wrapper.find('.booking_btn').length === 2);
  });

  it('check button name', () => {
    const content = 'Publish';
    const wrapper = shallow(<button className="booking_btn" >Publish</button>);
    expect(wrapper.text()).toBe(content);
  });
  it('check button name', () => {
    const content = 'Back';
    const wrapper = shallow(<button className="booking_btn" >Back</button>);
    expect(wrapper.text()).toBe(content);
  });
  it('it includes an element which is DatePicker', () => {
    const wrapper = shallow(<ListingPublish />);
    expect(wrapper.find('DatePicker').length === 1);
  });
  it('it includes two button', () => {
    const wrapper = shallow(<ListingPublish />);
    expect(wrapper.find('button').length === 2);
  });
  it('it includes an button which can be clicked', () => {
    const onClick = jest.fn();
    shallow(<button className="booking_btn" onClick={onClick}>Publish</button>).simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('it includes an button which can be clicked', () => {
    const onClick = jest.fn();
    shallow(<button className="booking_btn" onClick={onClick}>Back</button>).simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
