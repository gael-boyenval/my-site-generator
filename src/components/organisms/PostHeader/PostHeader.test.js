/* eslint-disable no-undef */
import React from 'react';

import PostHeader from './PostHeader';
import propMock from './PostHeader.mock';

describe('Component PostHeader', () => {
  it('should be render without crash', () => {
    const component = shallow(<PostHeader {...propMock} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
