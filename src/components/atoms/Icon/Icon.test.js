/* eslint-disable no-undef */
import React from 'react';

import Icon from './Icon';

describe('Component Icon', () => {
  it('should be render without crash', () => {
    const component = shallow(<Icon name="arrowLeft" />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
