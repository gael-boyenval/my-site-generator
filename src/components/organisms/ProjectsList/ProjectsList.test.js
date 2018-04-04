/* eslint-disable no-undef */
import React from 'react';
import ProjectsList from './ProjectsList';

describe('Component ProjectsList', () => {
  it('should be render without crash', () => {
    const component = shallow(<ProjectsList />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
