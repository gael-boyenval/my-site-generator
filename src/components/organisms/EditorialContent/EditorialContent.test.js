/* eslint-disable no-undef */
import React from 'react';

import EditorialContent from './EditorialContent';
import propMock from './EditorialContent.mock';

describe('Component EditorialContent', () => {
  it('should be render without crash', () => {
    const component = shallow(<EditorialContent {...propMock} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
