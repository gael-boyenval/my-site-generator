import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { unit, colors } from 'Styles/tokens';
import { rem } from 'Styles/utils';
import { Margin } from 'Layout/Spaces';
import Grid from 'Layout/Grid';
import Container from 'Layout/Container';

import { EditorialTitle, LeadBodyCopyEditorial, TinyHeading } from 'Atoms/Typography';

const Header = styled.div`
  background: ${colors.white.light};
  color: ${colors.base.darkest};
  min-height: ${rem(unit * 20)};
  margin-top: -${rem(unit * 20)};
  padding-top: ${rem(unit * 6)};
`;

const ImageWrapper = styled.div`
  background: ${colors.base.darkest};
  min-height: ${rem(unit * 35)};
`;

const Wrapper = styled.header`
  background: ${colors.white.light};
`;

const PostHeader = ({ title, publishDate, leadBodyCopy }) => (
  <Wrapper>
    <ImageWrapper />
    <Container>
      <Grid gutter>
        <Grid.Cell size={9 / 12}>
          <Header>
            <Grid gutter>
              <Grid.Cell size={7 / 9} push={1 / 9}>
                <TinyHeading>{publishDate}</TinyHeading>
                <Margin vertical="m">
                  <EditorialTitle>{title}</EditorialTitle>
                </Margin>
                <LeadBodyCopyEditorial>{leadBodyCopy}</LeadBodyCopyEditorial>
              </Grid.Cell>
            </Grid>
          </Header>
        </Grid.Cell>
      </Grid>
    </Container>
  </Wrapper>
);

PostHeader.propTypes = {
  title: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  leadBodyCopy: PropTypes.string.isRequired,
};

export default PostHeader;
