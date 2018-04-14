import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, unit } from 'Styles/tokens';
import { rem } from 'Styles/utils';
import { Margin } from 'Layout/Spaces';
import { TinyHeading } from 'Atoms/Typography';
import Icon from 'Atoms/Icon';

const Button = TinyHeading.withComponent('a').extend`
  color: ${colors.electric};
  line-height: ${rem(unit)};
  display: inline-flex;
  margin: 0;
`;

const IconWrapper = styled.div`
  display: inline-block;
  height: ${rem(unit / 2)};
  margin-top: -${rem(unit / 2)};
`;

const ButtonLink = ({ children, ...rest }) => (
  <Button {...rest}>
    <IconWrapper>
      <Icon name="arrowRight" size={rem(unit * 2)} color={colors.white.dark} />
    </IconWrapper>
    <Margin left="s" inline>
      {children}
    </Margin>
  </Button>
);

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonLink;
