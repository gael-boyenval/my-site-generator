/* eslint-disable no-undef */
import React from 'react';
import Header from './Header';

import mock from './Header.mock';

describe('Component Header', () => {
  it('should be render without crashing', () => {
    const component = shallow(<Header data={mock} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
