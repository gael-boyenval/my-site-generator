import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from 'Styles/tokens';

const Svg = styled.svg`
  display: block;
  overflow: visible;
  ${({ size }) => css`
    width: ${size};
    height: ${size};
  `};

  ${({ inlineBlock }) =>
    inlineBlock &&
    css`
      display: inline-block;
    `};
`;

const Line = styled.line.attrs({
  vectorEffect: 'non-scaling-stroke',
})`
  stroke: ${({ theme }) => theme.color};
  stroke-width: ${({ theme }) => theme.strokeWidth};
  fill: ${({ theme }) => theme.fill};
`;

const Polyline = Line.withComponent('polyline');

const icons = {
  close: (theme) => (
    <g>
      <Line theme={theme} x1="0" y1="0" x2="12" y2="12" />,
      <Line theme={theme} x1="0" y1="12" x2="12" y2="0" />,
    </g>
  ),
  arrowLeft: (theme) => (
    <g>
      <Line theme={theme} x1="0" y1="6" x2="12" y2="6" />,
      <Polyline theme={theme} points="6 0 0 6 6 12" />,
    </g>
  ),
  arrowRight: (theme) => (
    <g>
      <Line theme={theme} x1="0" y1="6" x2="12" y2="6" />,
      <Polyline theme={theme} points="6 0 12 6 6 12" />,
    </g>
  ),
  carretDown: (theme) => <Polyline theme={theme} points="0 3 6 9 12 3" />,
  carretUp: (theme) => <Polyline theme={theme} points="0 9 6 3 12 9" />,
  carretRight: (theme) => <Polyline theme={theme} points="3 0 9 6 3 12" />,
  check: (theme) => <Polyline theme={theme} points="0 6 4 10 12 1" />,
};

const Icon = ({
  size, name, color, strokeWidth, fill, inlineBlock,
}) => (
  <Svg inlineBlock={inlineBlock} viewBox="0 0 12 12" size={size}>
    {icons[name]({ color, strokeWidth, fill })}
  </Svg>
);

Icon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  fill: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(icons)).isRequired,
  inlineBlock: PropTypes.bool,
};

Icon.defaultProps = {
  size: '1.2rem',
  color: colors.white.dark,
  strokeWidth: '1px',
  fill: 'none',
  inlineBlock: false,
};

export default Icon;
