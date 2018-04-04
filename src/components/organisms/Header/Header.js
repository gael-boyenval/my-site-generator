import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Grid from '../../layout/Grid';
import { TinyHeading } from '../../atoms/Typography';
import { spaces, unit, family } from '../../../styles/tokens';
import { rem } from '../../../styles/utils';

const Menu = styled.ul`
  list-style-type: none;
  text-align: right;
`;

const Wrapper = styled.header`
  height: ${rem(unit * 8)};
  display: flex;
  padding: ${rem(spaces.l)};
`;

const Item = TinyHeading.withComponent('li').extend`
  display: inline-block;
  padding-left: ${rem(spaces.m)};
`;

const Logo = styled.h3`
  font-family: ${family.sans};
  font-weight: 900;
  display: inline-block;
`;
const Hidden = styled.span`
  visibility: hidden;
  font-size: 0;
  text-indent: 100vh;
`;

const Header = ({ data }) => (
  <Wrapper>
    <Grid center gutter>
      <Grid.Cell>
        <Link to="/">
          <Logo>
            G.<Hidden>{data.site.siteMetadata.title}</Hidden>
          </Logo>
        </Link>
      </Grid.Cell>
      <Grid.Cell width="fill">
        <nav>
          <Menu>
            <Item>
              <Link to="/page2/">Page 2</Link>
            </Item>
            <Item>
              <Link to="/counter/">Counter</Link>
            </Item>
            <Item>
              <Link to="/my-files/">files</Link>
            </Item>
          </Menu>
        </nav>
      </Grid.Cell>
    </Grid>
  </Wrapper>
);

Header.propTypes = {
  data: PropTypes.shape({}),
};

Header.defaultProps = {
  data: {},
};

export default Header;
