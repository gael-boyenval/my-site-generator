/* eslint-disable no-undef */
import React from 'react';

import {
  BadassTitle,
  EditorialTitle,
  LeadBodyCopy,
  LeadBodyCopyEditorial,
  TinyHeading,
  Mention,
  SubTitle,
  Title3,
  Title3Sans,
} from './index';

describe('Component Typography BadassTitle', () => {
  it('should be render without crash', () => {
    const component = shallow(<BadassTitle>Hello</BadassTitle>);

    expect(toJson(component)).toMatchSnapshot();
  });
});

describe('Component Typography EditorialTitle', () => {
  it('should be render without crash', () => {
    const component = shallow(<EditorialTitle>Hello</EditorialTitle>);

    expect(toJson(component)).toMatchSnapshot();
  });
});

describe('Component Typography SubTitle', () => {
  it('should be render without crash', () => {
    const component = shallow(<SubTitle>Hello</SubTitle>);

    expect(toJson(component)).toMatchSnapshot();
  });
});

describe('Component Typography LeadBodyCopy', () => {
  it('should be render without crash', () => {
    const component = shallow(<LeadBodyCopy>Hello</LeadBodyCopy>);

    expect(toJson(component)).toMatchSnapshot();
  });
});
describe('Component Typography LeadBodyCopyEditorial', () => {
  it('should be render without crash', () => {
    const component = shallow(<LeadBodyCopyEditorial>Hello</LeadBodyCopyEditorial>);

    expect(toJson(component)).toMatchSnapshot();
  });
});

describe('Component Typography TinyHeading', () => {
  it('should be render without crash', () => {
    const component = shallow(<TinyHeading>Hello</TinyHeading>);

    expect(toJson(component)).toMatchSnapshot();
  });
});

describe('Component Typography Mention', () => {
  it('should be render without crash', () => {
    const component = shallow(<Mention>Hello</Mention>);

    expect(toJson(component)).toMatchSnapshot();
  });
});

describe('Component Typography Title3', () => {
  it('should be render without crash', () => {
    const component = shallow(<Title3>Hello</Title3>);

    expect(toJson(component)).toMatchSnapshot();
  });
});

describe('Component Typography Title3Sans', () => {
  it('should be render without crash', () => {
    const component = shallow(<Title3Sans>Hello</Title3Sans>);

    expect(toJson(component)).toMatchSnapshot();
  });
});
