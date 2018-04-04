/* eslint-disable no-undef */
import React from 'react';
import ProjectItem from './ProjectItem';

describe('Component ProjectItem', () => {
  it('should be render without crash', () => {
    const component = shallow(<ProjectItem />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
