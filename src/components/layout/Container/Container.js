import styled from 'styled-components';
import { unit, spaces } from 'Styles/tokens';
import { rem } from 'Styles/utils';

const Container = styled.div`
  width: 100%;
  max-width: ${rem(unit * 108)};
  margin: 0 auto;
  padding: 0 ${rem(spaces.m)};
`;

export default Container;
