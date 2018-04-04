/* eslint-disable no-undef */
import React from 'react';
import MainHero from './MainHero';

describe('Component MainHero', () => {
  it('should be render without crash', () => {
    const component = shallow(<MainHero title="lorem ipsum dolor " />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
