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

  it('should be render grid with a cell with 1/2push and 1/2 size', () => {
    const component = shallow(
      <Grid gutter>
        <Grid.Cell size={1 / 2} push={1 / 2}>
          col 1 size 50%, push 50%
        </Grid.Cell>
      </Grid>,
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
