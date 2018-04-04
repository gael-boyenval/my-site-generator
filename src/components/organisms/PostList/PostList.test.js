/* eslint-disable no-undef */
import React from 'react';
import PostList from './PostList';

const posts = { edges: [] };

describe('Component PostList', () => {
  it('should be render without crash', () => {
    const component = shallow(<PostList posts={posts} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
