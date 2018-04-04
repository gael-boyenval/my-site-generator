/* eslint-disable no-undef */
import React from 'react';

import Container from './Container';

describe('Component Container', () => {
  it('should be render without crash', () => {
    const component = shallow(<Container />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
