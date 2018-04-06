/* eslint-disable no-undef */
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';

import ProjectItem from './ProjectItem';
import mock from './ProjectItem.mock';

const shallowWithRouter = (node) =>
  shallow(<Router initialEntries={[{ pathname: '/', key: 'testKey' }]}>{node}</Router>);

describe('Component ProjectItem', () => {
  it('should be render without crash', () => {
    const component = shallowWithRouter(<ProjectItem num="01" {...mock} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
