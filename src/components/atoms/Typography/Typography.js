import styled from 'styled-components';
import { fontSizes, family, unit } from 'Styles/tokens';
import { rem, closestLineHeight } from 'Styles/utils';

export const BadassTitle = styled.h1`
  font-size: ${rem(fontSizes.xxxl)};
  font-family: ${family.sans};
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  margin: 0;
  transform: translateY(-${rem(3)});
`;

export const EditorialTitle = styled.h1`
  font-size: ${rem(fontSizes.xxl)};
  font-family: ${family.serif};
  font-weight: 500;
  line-height: ${closestLineHeight(fontSizes.xxl, 1, unit / 2)};
  margin: 0;
`;

export const SubTitle = styled.h2`
  font-size: ${rem(fontSizes.xl)};
  font-family: ${family.serif};
  font-weight: 500;
  line-height: ${closestLineHeight(fontSizes.xl, 1.3, unit / 2)};
  margin: 0;
  transform: translateY(${rem(1)});
`;

export const Title3Sans = styled.h3`
  font-size: ${rem(fontSizes.s)};
  font-family: ${family.sans};
  line-height: ${closestLineHeight(fontSizes.s, 1.3, unit / 2)};
  font-weight: bold;
  margin: 0;
`;

export const Title3 = styled.h3`
  font-size: ${rem(fontSizes.l)};
  font-family: ${family.serif};
  line-height: ${closestLineHeight(fontSizes.l, 1.3, unit / 2)};
  font-weight: 400;
  margin: 0;
  transform: translateY(${rem(5)});
`;

export const LeadBodyCopy = styled.p`
  font-size: ${rem(fontSizes.m)};
  font-family: ${family.serif};
  line-height: ${closestLineHeight(fontSizes.m, 1.5, unit / 2)};
  margin: 0;
  transform: translateY(-${rem(2)});
`;

export const LeadBodyCopyEditorial = styled.p`
  font-size: ${rem(fontSizes.s)};
  font-family: ${family.sans};
  font-weight: bold;
  line-height: ${closestLineHeight(fontSizes.s, 1.5, unit / 2)};
  margin: 0;
  transform: translateY(${rem(1)});
`;

export const TinyHeading = styled.h4`
  font-size: ${rem(fontSizes.xxxs)};
  font-family: ${family.sans};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1;
  margin: 0;
`;

export const BodySans = styled.p`
  font-size: ${rem(fontSizes.xs)};
  font-family: ${family.sans};
  font-weight: 500;
  line-height: ${closestLineHeight(fontSizes.xs, 1.5, unit / 2)};
  margin: 0;
`;

export const Mention = BodySans.extend`
  font-size: ${rem(fontSizes.xxxs)};
  margin: 0;
`;
