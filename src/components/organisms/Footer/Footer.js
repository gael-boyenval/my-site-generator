import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { SubTitle, TinyHeading, BodySans, Mention } from 'Atoms/Typography';
import Container from 'Layout/Container';
import { Padding, Margin } from 'Layout/Spaces';

const Wrapper = styled.footer`
  text-align: center;
`;

const LinkTinyHeading = TinyHeading.withComponent('a');

class Footer extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Container>
          <Padding vertical="wide">
            <Margin bottom="m">
              <SubTitle>Prenons un café</SubTitle>
            </Margin>
            <Margin bottom="xs">
              <LinkTinyHeading>linkedin</LinkTinyHeading>&nbsp;-&nbsp;
              <LinkTinyHeading>medium</LinkTinyHeading>&nbsp;-&nbsp;
              <LinkTinyHeading>github</LinkTinyHeading>&nbsp;-&nbsp;
              <LinkTinyHeading>twitter</LinkTinyHeading>
            </Margin>
            <Margin bottom="l">
              <BodySans>
                gaelboyenval@icloud.com <br /> 06 08 14 58 40
              </BodySans>
            </Margin>
            <Mention>
              Ce site à été créé avec beaucoup d’amour, <br />
              mais aussi avec Gatsby, React et est hebergé par Github
            </Mention>
          </Padding>
        </Container>
      </Wrapper>
    );
  }
}

export default Footer;
