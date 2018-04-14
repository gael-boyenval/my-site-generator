/* eslint-disable no-undef */
import React from 'react';

import GridViewer from './GridViewer';

describe('Component GridViewer', () => {
  it('should be render without crash', () => {
    const component = shallow(<GridViewer />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
