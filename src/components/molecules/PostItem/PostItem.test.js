/* eslint-disable no-undef */
import React from 'react';
import PostItem from './PostItem';

const data = {
  fields: {
    slug: 'cest-un-hash-d-url',
  },
  frontmatter: {
    title: 'c’est un super titre',
  },
};

describe('Component PostItem', () => {
  it('should be render without crash', () => {
    const component = shallow(<PostItem post={data} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
