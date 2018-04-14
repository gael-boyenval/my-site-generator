import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import PropTypes from 'prop-types';

import RehypeReact from 'rehype-react';

import { colors, unit } from 'Styles/tokens';
import { rem } from 'Styles/utils';
import prismTheme from 'Styles/prismTheme';

import Grid from 'Layout/Grid';
import Container from 'Layout/Container';
import { SubTitle, Title3Sans } from 'Atoms/Typography';

/* eslint-disable-next-line */
injectGlobal`${prismTheme}`;

const He2 = SubTitle.extend`
  margin: ${rem(unit * 2)} 0;
`;

const He3 = Title3Sans.extend`
  margin: ${rem(unit * 2)} 0;
`;

const TextContainer = styled.div`
  a {
    border-bottom: solid 1px currentColor;
  }
`;

const EditorialWrapper = styled.section`
  background: ${colors.white.light};
  color: ${colors.base.darkest};
`;

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    he2: He2,
    he3: He3,
  },
}).Compiler;

const EditorialContent = ({ htmlAst }) => (
  <EditorialWrapper className="editorial-content">
    <Container>
      <Grid gutter>
        <Grid.Cell size={7 / 12} push={1 / 12}>
          <TextContainer>{renderAst(htmlAst)}</TextContainer>
        </Grid.Cell>
      </Grid>
    </Container>
  </EditorialWrapper>
);

EditorialContent.propTypes = {
  htmlAst: PropTypes.shape({}).isRequired,
};

export default EditorialContent;
