/* eslint-disable no-undef */
import React from 'react';
import Header from './Header';

describe('Component Header', () => {
  const mockData = {
    site: {
      siteMetadata: {
        title: 'lorem ipsum',
      },
    },
  };

  it('should be render without crashing', () => {
    const component = shallow(<Header data={mockData} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
