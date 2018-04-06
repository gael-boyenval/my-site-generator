import styled from 'styled-components';
import { unit, spaces } from '../../../styles/tokens';
import { rem } from '../../../styles/utils';

const Container = styled.div`
  max-width: ${rem(unit * 108)};
  margin: 0 auto;
  padding: 0 ${rem(spaces.xl)};
`;

export default Container;
