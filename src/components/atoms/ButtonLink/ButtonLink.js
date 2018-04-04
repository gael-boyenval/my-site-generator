import React from 'react';
import PropTypes from 'prop-types';
import { TinyHeading } from '../Typography';
import Icon from '../Icon';
import { colors, unit } from '../../../styles/tokens';
import { rem } from '../../../styles/utils';
import { Margin } from '../../layout/Spaces';

const Button = TinyHeading.withComponent('a').extend`
  color: ${colors.electric};
  line-height: ${rem(unit)};
  display: inline-flex;
  margin: 0;
`;

const ButtonLink = ({ children, ...rest }) => (
  <Button {...rest}>
    <Icon name="arrowRight" size={rem(unit)} inlineBlock color={colors.electric} />
    <Margin left="s" inline>
      {children}
    </Margin>
  </Button>
);

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonLink;
