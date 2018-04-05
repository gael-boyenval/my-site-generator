/* eslint-disable no-undef */
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';

import PostList from './PostList';
import mock from './PostList.mock';

const shallowWithRouter = (node) =>
  shallow(<Router initialEntries={[{ pathname: '/', key: 'testKey' }]}>{node}</Router>);

describe('Component PostList', () => {
  it('should be render without crash', () => {
    const component = shallowWithRouter(<PostList posts={mock} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
