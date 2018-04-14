import { closestMultiple, rem, closestLineHeight } from 'Styles/utils';

/* eslint-disable */
describe('Styles Utils rem', () => {
  it('should transform to rem (val/10+"rem")', () => {
    expect(rem(20)).toEqual('2rem');
  });
});

describe('Styles Utils closestMultiple', () => {
  it('should find the closestMultiple', () => {
    expect(closestMultiple(13, 12)).toEqual(12);
    expect(closestMultiple(34, 10)).toEqual(30);
    expect(closestMultiple(36, 10)).toEqual(40);
  });
});

describe('Styles Utils closestLineHeight', () => {
  it('should find the closestLineHeight when equal', () => {
    expect(closestLineHeight(10, 1, 10)).toEqual(1);
    expect(closestLineHeight(10, 1.2, 10)).toEqual(1);
    expect(closestLineHeight(10, 1.6, 10)).toEqual(2);
    expect(closestLineHeight(60, 1, 12)).toEqual(1);
  });
});
