/* eslint-disable no-undef */
import React from 'react';
import Footer from './Footer';
import mock from './Footer.mock';

describe('Component Footer', () => {
  it('should be rendered without crash', () => {
    const component = shallow(<Footer {...mock} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should call handleContact when button is clicked', () => {
    const component = mount(<Footer {...mock} />);
    window.location.assign = jest.fn();
    component.find('button').simulate('click');
    expect(window.location.assign).toBeCalledWith('mailto:gaelboyenval@icloud.com');
  });
});
