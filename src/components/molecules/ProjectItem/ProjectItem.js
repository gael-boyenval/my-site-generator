import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Container from 'Layout/Container';
import Grid from 'Layout/Grid';
import { Padding } from 'Layout/Spaces';
import Icon from 'Atoms/Icon';
import { colors, unit } from 'Styles/tokens';
import { rem } from 'Styles/utils';

import { TinyHeading, Title3Sans, SubTitle, BodySans } from 'Atoms/Typography';

const Item = styled.div`
  width: 100%;
  height: ${rem(unit * 7)};
  transition: transform 0.5s ease, opacity 0.5s ease;
`;

const ItemContainer = Container.extend`
  height: ${rem(unit * 7)};
`;

const ProjectName = Title3Sans.extend`
  padding-top: ${rem(unit / 2)};
  transform: translateY(-${rem(2)});
`;

const ItemHover = styled.div`
  width: 100%;
  height: ${rem(unit * 7)};
  background-color: ${({ bg }) => bg};
  display: flex;
  transition: transform 0.5s ease, opacity 0.5s ease;
`;

const TitleWrapper = Grid.extend`
  padding: ${rem(unit)} 0 ${rem(unit)};
`;

const Border = styled.div`
  padding-top: ${rem(unit * 1.5)};
  margin-bottom: ${rem(unit)};
  border-bottom: solid 1px ${colors.base.light};
`;

const Wrapper = styled(Link)`
  width: 100%;
  display: block;
  height: ${rem(unit * 7)};
  position: relative;
  overflow: hidden;

  &:hover {
    color: inherit;

    ${ItemHover} {
      transform: translateY(-${rem(unit * 7)});
      opacity: 1;
    }

    ${Item} {
      transform: translateY(${rem(unit * 5)});
      opacity: 0;
    }

    ${TitleWrapper} {
      border-bottom: solid 0px ${colors.base.light};
    }
  }
`;

const IconWrapper = styled.div`
  padding-top: ${rem(unit * 1.5)};
`;

const ItemHoverInfo = BodySans.extend`
  font-weight: bold;
  transform: translateY(${rem(4)});
`;

const ClientHover = SubTitle.extend`
  text-align: left;
  transform: translateY(${rem(unit / 2)});
`;

const ProjectItem = ({
  num, client, mission, myRole, period, brandColor, slug,
}) => (
  <Wrapper to={slug}>
    <Item>
      <ItemContainer>
        <Grid gutter>
          <Grid.Cell size={1 / 12}>
            <Padding top="m">
              <TinyHeading>{num}</TinyHeading>
            </Padding>
          </Grid.Cell>
          <Grid.Cell size={7 / 12}>
            <TitleWrapper gutter>
              <Grid.Cell size={5 / 7}>
                <ProjectName>
                  {client} - {mission}
                </ProjectName>
              </Grid.Cell>
              <Grid.Cell size={2 / 7}>
                <Padding top="s">
                  <TinyHeading>{period}</TinyHeading>
                </Padding>
              </Grid.Cell>
            </TitleWrapper>
          </Grid.Cell>
          <Grid.Cell size={1 / 12}>
            <IconWrapper>
              <Icon name="arrowRight" size={rem(unit * 2)} color={colors.white.dark} />
            </IconWrapper>
          </Grid.Cell>
        </Grid>
        <Grid gutter>
          <Grid.Cell size={7 / 12} push={1 / 12}>
            <Border />
          </Grid.Cell>
        </Grid>
      </ItemContainer>
    </Item>
    <ItemHover bg={brandColor}>
      <Grid gutter center>
        <Grid.Cell size={1 / 4}>
          <Padding left="xl">
            <ClientHover>{client}</ClientHover>
          </Padding>
        </Grid.Cell>
        <Grid.Cell size={1 / 4}>
          <TinyHeading>mission</TinyHeading>
          <ItemHoverInfo>{mission}</ItemHoverInfo>
        </Grid.Cell>
        <Grid.Cell size={1 / 4}>
          <TinyHeading>rôle</TinyHeading>
          <ItemHoverInfo>{myRole}</ItemHoverInfo>
        </Grid.Cell>
        <Grid.Cell size={1 / 4}>
          <TinyHeading>années</TinyHeading>
          <ItemHoverInfo>{period}</ItemHoverInfo>
        </Grid.Cell>
      </Grid>
    </ItemHover>
  </Wrapper>
);

ProjectItem.propTypes = {
  num: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  mission: PropTypes.string.isRequired,
  myRole: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  brandColor: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProjectItem;
