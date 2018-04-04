import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { spaces } from '../../../styles/tokens';
import { rem } from '../../../styles/utils';

const AllowedSpacesValues = Object.keys(spaces);

const DivWithSpace = (space) => ({
  all, horizontal, vertical, top, right, bottom, left,
}) => css`
  ${all &&
    css`
      ${space}: ${rem(spaces[all])};
    `};
  ${horizontal &&
    css`
      ${space}-left: ${rem(spaces[horizontal])};
      ${space}-right: ${rem(spaces[horizontal])};
    `};
  ${vertical &&
    css`
      ${space}-top: ${rem(spaces[vertical])};
      ${space}-bottom: ${rem(spaces[vertical])};
    `};
  ${top &&
    css`
      ${space}-top: ${rem(spaces[top])};
    `};
  ${right &&
    css`
      ${space}-right: ${rem(spaces[right])};
    `};
  ${bottom &&
    css`
      ${space}-bottom: ${rem(spaces[bottom])};
    `};
  ${left &&
    css`
      ${space}-left: ${rem(spaces[left])};
    `};
`;

export const Margin = styled.div`
  ${DivWithSpace('margin')};
  ${({ inline }) =>
    inline &&
    css`
      display: inline-block;
    `};
`;

export const Padding = styled.div`
  ${DivWithSpace('padding')};
  ${({ inline }) =>
    inline &&
    css`
      display: inline-block;
    `};
`;

const globalPropTypes = {
  all: PropTypes.oneOfType([PropTypes.oneOf(AllowedSpacesValues), PropTypes.bool]),
  horizontal: PropTypes.oneOfType([PropTypes.oneOf(AllowedSpacesValues), PropTypes.bool]),
  vertical: PropTypes.oneOfType([PropTypes.oneOf(AllowedSpacesValues), PropTypes.bool]),
  top: PropTypes.oneOfType([PropTypes.oneOf(AllowedSpacesValues), PropTypes.bool]),
  right: PropTypes.oneOfType([PropTypes.oneOf(AllowedSpacesValues), PropTypes.bool]),
  bottom: PropTypes.oneOfType([PropTypes.oneOf(AllowedSpacesValues), PropTypes.bool]),
  left: PropTypes.oneOfType([PropTypes.oneOf(AllowedSpacesValues), PropTypes.bool]),
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
};

const defaultProps = {
  all: false,
  horizontal: false,
  vertical: false,
  top: false,
  right: false,
  bottom: false,
  left: false,
  inline: false,
};

Margin.propTypes = globalPropTypes;
Padding.propTypes = globalPropTypes;
Margin.defaultProps = defaultProps;
Padding.defaultProps = defaultProps;
