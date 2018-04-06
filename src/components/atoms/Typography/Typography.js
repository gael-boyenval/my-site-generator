import styled from 'styled-components';
import { fontSizes, family, unit } from 'Styles/tokens';
import { rem, closestLineHeight } from 'Styles/utils';

export const BadassTitle = styled.h1`
  font-size: ${rem(fontSizes.xxxl)};
  font-family: ${family.sans};
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
`;

export const SubTitle = styled.h2`
  font-size: ${rem(fontSizes.xl)};
  font-family: ${family.serif};
  font-weight: 500;
  line-height: ${closestLineHeight(fontSizes.l, 1.3, unit)};
`;

export const Title3Sans = styled.h3`
  font-size: ${rem(fontSizes.s)};
  font-family: ${family.sans};
  line-height: ${closestLineHeight(fontSizes.m, 1.3, unit / 2)};
  font-weight: bold;
`;

export const Title3 = styled.h3`
  font-size: ${rem(fontSizes.l)};
  font-family: ${family.serif};
  line-height: ${closestLineHeight(fontSizes.m, 1.3, unit / 2)};
  font-weight: 400;
`;

export const LeadBodyCopy = styled.p`
  font-size: ${rem(fontSizes.m)};
  font-family: ${family.serif};
  line-height: ${closestLineHeight(fontSizes.m, 1.5, unit)};
`;

export const TinyHeading = styled.h4`
  font-size: ${rem(fontSizes.xxxs)};
  font-family: ${family.sans};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 1;
`;

export const BodySans = styled.p`
  font-size: ${rem(fontSizes.xs)};
  font-family: ${family.sans};
  font-weight: 500;
  line-height: ${closestLineHeight(fontSizes.m, 1.5, unit / 2)};
`;

export const Mention = BodySans.extend`
  font-size: ${rem(fontSizes.xxxs)};
`;
