/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import 'jest-styled-components';

import JustForGitHooks from './JustForGitHooks';

configure({ adapter: new Adapter() });

describe('Component JustForGitHooks', () => {
  it('should be render without crash', () => {
    const component = renderer.create(<JustForGitHooks />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
