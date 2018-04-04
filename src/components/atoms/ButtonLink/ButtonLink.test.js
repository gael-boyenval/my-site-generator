/* eslint-disable no-undef */
import React from 'react';

import ButtonLink from './ButtonLink';

describe('Component ButtonLink', () => {
  it('should be render without crash', () => {
    const component = shallow(<ButtonLink>hello</ButtonLink>);

    expect(toJson(component)).toMatchSnapshot();
  });
});
