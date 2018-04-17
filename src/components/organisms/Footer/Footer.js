import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from 'Styles/tokens';
import { SubTitle, TinyHeading, BodySans, Mention } from 'Atoms/Typography';
import Container from 'Layout/Container';
import { Padding, Margin } from 'Layout/Spaces';

const Wrapper = styled.footer`
  text-align: center;
`;

const SocialLink = TinyHeading.withComponent('a').extend`
  &:not(:last-child):after {
    content:" - "
  }
`;

const EmailButton = styled.button`
  border-bottom: solid 1px currentColor;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.electric};
  }
`;

const BodySansDiv = BodySans.withComponent('div');

class Footer extends PureComponent {
  static propTypes = {
    social: PropTypes.shape({}).isRequired,
  };

  handleContact = () => {
    window.location.assign('mailto:gaelboyenval@icloud.com');
  };

  render() {
    const { social } = this.props;

    return (
      <Wrapper>
        <Container>
          <Padding vertical="wide">
            <Margin bottom="m">
              <SubTitle>Prenons un café</SubTitle>
            </Margin>
            <Margin bottom="xs">
              {Object.keys(social).map((netWork) => (
                <SocialLink key={netWork} href={social[netWork]} target="_blank">
                  {netWork}
                </SocialLink>
              ))}
            </Margin>
            <Margin bottom="l">
              <BodySansDiv>
                <Margin bottom="xs">
                  <EmailButton onClick={this.handleContact}>Contactez-moi par e-mail</EmailButton>
                </Margin>
                06 08 14 58 40
              </BodySansDiv>
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
