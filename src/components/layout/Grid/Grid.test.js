/* eslint-disable no-undef */
import React from 'react';

import Grid from './Grid';

describe('Component Grid', () => {
  it('should be render without crash', () => {
    const component = shallow(<Grid />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should be render grid with a cell and a gutter', () => {
    const component = shallow(
      <Grid gutter>
        <Grid.Cell>col 1</Grid.Cell>
        <Grid.Cell>col 2</Grid.Cell>
      </Grid>,
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
