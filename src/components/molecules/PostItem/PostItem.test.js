/* eslint-disable no-undef */
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';

import PostItem from './PostItem';
import mock from './PostItem.mock';

const shallowWithRouter = (node) =>
  shallow(<Router initialEntries={[{ pathname: '/', key: 'testKey' }]}>{node}</Router>);

describe('Component PostItem', () => {
  it('should be render without crash', () => {
    const component = shallowWithRouter(<PostItem post={mock} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
