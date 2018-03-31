/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import 'jest-styled-components';

import BlogPost from './BlogPost';

configure({ adapter: new Adapter() });

describe('Component BlogPost', () => {
  it('should be render without crash', () => {
    const component = renderer.create(<BlogPost data={{}} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
