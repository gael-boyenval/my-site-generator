import React from 'react';
import styled from 'styled-components';

import { BadassTitle, TinyHeading, LeadBodyCopy } from 'Atoms/Typography';
import Grid from 'Layout/Grid';
import { Padding, Margin } from 'Layout/Spaces';
import Container from 'Layout/Container';
import ButtonLink from 'Atoms/ButtonLink';
import { colors } from 'Styles/tokens';

const Strong = styled.strong`
  font-weight: bold;
  color: ${colors.white.light};
`;

const MainHero = () => (
  <Container>
    <Padding vertical="wide">
      <Grid gutter>
        <Grid.Cell size={8 / 12}>
          <Margin bottom="l">
            <BadassTitle>
              Design.<br />Code.<br />Partage.
            </BadassTitle>
          </Margin>
          <Margin bottom="s">
            <TinyHeading>– Bonjour,</TinyHeading>
          </Margin>
          <LeadBodyCopy>
            Je m’appelle Gaël, suis <Strong>UX/UI designer</Strong> et{' '}
            <Strong>développeur front freelance</Strong> avec plus de{' '}
            <Strong>10 ans d’experience</Strong>. Je travaille sur <Strong>Paris</Strong> en régie
            ou à distance pour des startups et des grand comptes. Vous pouvez aussi faire appel à
            moi pour des missions de <Strong>consulting</Strong>.
          </LeadBodyCopy>
          <Margin top="m">
            <ButtonLink>Mon CV</ButtonLink>
            <br />
            <ButtonLink>les services</ButtonLink>
          </Margin>
        </Grid.Cell>
      </Grid>
    </Padding>
  </Container>
);

export default MainHero;
