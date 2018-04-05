/* eslint-disable no-undef */
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';

import ProjectList from './ProjectList';
import mock from './ProjectList.mock';

const shallowWithRouter = (node) =>
  shallow(<Router initialEntries={[{ pathname: '/', key: 'testKey' }]}>{node}</Router>);

describe('Component ProjectList', () => {
  it('should be render without crash', () => {
    const component = shallowWithRouter(<ProjectList projects={mock} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
