import React, { Fragment } from 'react';
import styled from 'styled-components';

const Stripes = styled.div`
  background: linear-gradient(
    to bottom,
    transparent,
    transparent 91.666667%,
    rgba(122, 122, 122, 0.1) 91.666667%,
    rgba(122, 122, 122, 0.1)
  );
  /* The rectangle in which to repeat.
   It can be fully wide in this case */
  background-size: 100% 12px;
  position: absolute;
  z-index: 20;
  user-select: none;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`;

const Gridview = styled.div`
  position: absolute;
  z-index: 20;
  user-select: none;
  width: 100%;
  max-width: ${129.6}rem;
  top: 0;
  left: 50%;
  bottom: 0;
  right: auto;
  transform: translateX(-50%);
  pointer-events: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  margin: 0;
`;

const Col = styled.div`
  padding: 2.4rem;
  flex: 1;
  display: flex;
  align-items: stretch;
  pointer-events: none;

  &:before {
    content: '';
    flex: 100%;
    display: block;
    border: solid 1px rgba(122, 122, 122, 0.1);
  }
`;

export const Wrapper = styled.div`
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  &::-webkit-scrollbar {
    width: 0;
  }
  &::-webkit-scrollbar-track-piece {
    background-color: transparent;
    transform: translateX(-8px);
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
`;

const ShowGrid = () => (
  <Gridview>
    <Col />
    <Col />
    <Col />
    <Col />
    <Col />
    <Col />
    <Col />
    <Col />
    <Col />
    <Col />
    <Col />
    <Col />
  </Gridview>
);

const GridViewer = () => (
  <Fragment>
    <ShowGrid />
    <Stripes />
  </Fragment>
);

export default GridViewer;
