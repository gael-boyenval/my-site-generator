import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import 'Styles/GlobalStyles';

import { unit, colors } from 'Styles/tokens';
import { rem } from 'Styles/utils';
import GridViewer from 'Utils/GridViewer';
import Header from 'Organisms/Header';
import Footer from 'Organisms/Footer';

const FrameBar = styled.div`
  position: fixed;
  z-index: 3;
  background: ${colors.white.light};

  ${({ left }) =>
    left &&
    css`
      top: 0;
      left: 0;
      bottom: 0;
      width: ${rem(unit * 1.5)};
    `};
  ${({ right }) =>
    right &&
    css`
      top: 0;
      right: 0;
      bottom: 0;
      width: ${rem(unit * 1.5)};
    `};
  ${({ top }) =>
    top &&
    css`
      top: 0;
      right: 0;
      left: 0;
      height: ${rem(unit * 1.5)};
    `};
  ${({ bottom }) =>
    bottom &&
    css`
      bottom: 0;
      right: 0;
      left: 0;
      height: ${rem(unit * 1.5)};
    `};
`;

const Wrapper = styled.div`
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: ${rem(unit * 1.5)};

  &::-webkit-scrollbar {
    width: 0;
  }
  &::-webkit-scrollbar-track-piece {
    background-color: transparent;
    transform: translateX(-8px);
  }
`;

const ContentWrapper = styled.div`
  position: relative;
`;

const Frame = () => (
  <Fragment>
    <FrameBar top />
    <FrameBar left />
    <FrameBar right />
    <FrameBar bottom />
  </Fragment>
);

const Index = ({ data, children }) => (
  <Fragment>
    <Frame />
    <Wrapper>
      <ContentWrapper>
        <Header data={data} />
        <main>{children()}</main>
        <Footer social={data.site.siteMetadata.social} />
        <GridViewer />
      </ContentWrapper>
    </Wrapper>
  </Fragment>
);

Index.propTypes = {
  data: PropTypes.shape({}),
  children: PropTypes.func.isRequired,
};

Index.defaultProps = {
  data: {},
};

export default Index;

/* eslint no-undef: "off" */
export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        social {
          github
          linkedin
          medium
          twitter
        }
      }
    }
  }
`;
