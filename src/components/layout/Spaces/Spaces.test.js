/* eslint-disable no-undef */
import React from 'react';

import { Margin, Padding } from './Spaces';

describe('Component Margin', () => {
  it('should be render all without crash', () => {
    const component = shallow(<Margin all="m">hello</Margin>);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should be render left without crash', () => {
    const component = shallow(<Margin left="m">hello</Margin>);

    expect(toJson(component)).toMatchSnapshot();
  });
});

describe('Component Padding', () => {
  it('should be render without crash', () => {
    const component = shallow(<Padding all="m">hello</Padding>);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should be render left without crash', () => {
    const component = shallow(<Padding left="m">hello</Padding>);

    expect(toJson(component)).toMatchSnapshot();
  });
});
