import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Container from '../../layout/Container';
import Grid from '../../layout/Grid';
import { Padding } from '../../layout/Spaces';
import Icon from '../../atoms/Icon';
import { colors, unit } from '../../../styles/tokens';
import { rem } from '../../../styles/utils';

import { TinyHeading, Title3Sans, SubTitle, BodySans } from '../../atoms/Typography';

const Item = styled.div`
  width: 100%;
  height: ${rem(unit * 7)};
  transition: transform 0.5s ease, opacity 0.5s ease;
`;

const ItemContainer = Container.extend`
  height: ${rem(unit * 7)};
  display: flex;
`;

const ProjectName = Title3Sans.extend`
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
  border-bottom: solid 1px ${colors.base.light};
  height: ${rem(unit * 7)};
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

const ItemHoverInfo = BodySans.extend`
  font-weight: bold;
`;

const ClientHover = SubTitle.extend`
  text-align: right;
`;

const ProjectItem = ({
  num, client, mission, myRole, period, brandColor, slug,
}) => (
  <Wrapper to={slug}>
    <Item>
      <ItemContainer>
        <Grid gutter center>
          <Grid.Cell width={1 / 12}>
            <TinyHeading>{num}</TinyHeading>
          </Grid.Cell>
          <Grid.Cell width={7 / 12}>
            <TitleWrapper gutter center>
              <Grid.Cell width={5 / 7}>
                <ProjectName>
                  {client} - {mission}
                </ProjectName>
              </Grid.Cell>
              <Grid.Cell width={2 / 7}>
                <TinyHeading>{period}</TinyHeading>
              </Grid.Cell>
            </TitleWrapper>
          </Grid.Cell>
          <Grid.Cell width={1 / 12}>
            <Icon name="arrowRight" />
          </Grid.Cell>
        </Grid>
      </ItemContainer>
    </Item>
    <ItemHover bg={brandColor}>
      <Grid gutter center>
        <Grid.Cell width={1 / 4}>
          <Padding left="xl">
            <ClientHover>{client}</ClientHover>
          </Padding>
        </Grid.Cell>
        <Grid.Cell width={1 / 4}>
          <TinyHeading>mission</TinyHeading>
          <ItemHoverInfo>{mission}</ItemHoverInfo>
        </Grid.Cell>
        <Grid.Cell width={1 / 4}>
          <TinyHeading>rôle</TinyHeading>
          <ItemHoverInfo>{myRole}</ItemHoverInfo>
        </Grid.Cell>
        <Grid.Cell width={1 / 4}>
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
