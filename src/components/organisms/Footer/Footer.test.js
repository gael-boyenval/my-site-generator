/* eslint-disable no-undef */
import React from 'react';
import Footer from './Footer';

describe('Component Footer', () => {
  it('should be render without crash', () => {
    const component = shallow(<Footer />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
