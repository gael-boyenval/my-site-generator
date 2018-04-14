import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { gutter } from 'Styles/tokens';
import { rem } from 'Styles/utils';

export const gutterWidth = rem(gutter / 2);

const getPredefinedFlexValue = (value) =>
  ({
    fill: { flex: '1 1 0' },
    full: { flex: '100%' },
    default: { flex: 'initial' },
  }[value || 'default']);

const getFixedFlexValue = (value) => ({
  flex: `0 0 ${rem(value)}`,
  width: `${rem(value)}`,
  maxWidth: '100%',
});

const getPercentFlexValue = (value) => ({ flex: `0 0 ${value * 100}%` });

const setCellWidth = (width) => {
  if (width && typeof width === 'string') {
    return getPredefinedFlexValue(width);
  }

  if (width && typeof width === 'number' && width > 1) {
    return getFixedFlexValue(width);
  }

  if (width && typeof width === 'number' && width <= 1) {
    return getPercentFlexValue(width);
  }

  return {
    flex: 'initial',
  };
};

const setPush = (push) => (push && { marginLeft: `${push * 100}%` }) || {};

const GridCell = styled.div.attrs({
  style: ({ size, push }) => Object.assign({}, setCellWidth(size), setPush(push)),
})`
  ${({ alignRight }) =>
    alignRight &&
    css`
      margin-left: auto;
    `};
`;

GridCell.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  push: PropTypes.number,
};

GridCell.defaultProps = {
  push: null,
};

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  flex: 100%;

  ${(props) =>
    props.gutter &&
    css`
      margin-left: -${gutterWidth};
      margin-right: -${gutterWidth};

      > ${GridCell} {
        padding-right: ${gutterWidth};
        padding-left: ${gutterWidth};
      }
    `};

  ${(props) =>
    props.spaceAround &&
    css`
      justify-content: space-around;
    `};

  ${(props) =>
    props.center &&
    css`
      align-items: center;
    `};

  ${(props) =>
    props.inlineNowrap &&
    css`
      display: inline-flex;
      flex-flow: row nowrap;
      word-break: keep-all;

      > ${GridCell} {
        align-self: stretch;
      }
    `};
`;

Grid.Cell = GridCell;

Grid.propTypes = {
  gutter: PropTypes.bool,
  inlineNowrap: PropTypes.bool,
  spaceAround: PropTypes.bool,
  center: PropTypes.bool,
};

export default Grid;
