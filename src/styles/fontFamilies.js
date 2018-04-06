import { css } from 'styled-components';

import GMIw2 from 'Assets/fonts/subset-GauthierFY-MediumItalic.woff2';
import GMIw from 'Assets/fonts/subset-GauthierFY-MediumItalic.woff';
import GBw2 from 'Assets/fonts/subset-GauthierFY-Bold.woff2';
import GBw from 'Assets/fonts/subset-GauthierFY-Bold.woff';
import GMw2 from 'Assets/fonts/subset-GauthierFY-Medium.woff2';
import GMw from 'Assets/fonts/subset-GauthierFY-Medium.woff';
import GRw2 from 'Assets/fonts/subset-GauthierFY-Regular.woff2';
import GRw from 'Assets/fonts/subset-GauthierFY-Regular.woff';
import GRIw2 from 'Assets/fonts/subset-GauthierFY-Italic.woff2';
import GRIw from 'Assets/fonts/subset-GauthierFY-Italic.woff';
import GBIw2 from 'Assets/fonts/subset-GauthierFY-BoldItalic.woff2';
import GBIw from 'Assets/fonts/subset-GauthierFY-BoldItalic.woff';

import BRw2 from 'Assets/fonts/subset-BwModelica-Regular.woff2';
import BRw from 'Assets/fonts/subset-BwModelica-Regular.woff';
import BBw2 from 'Assets/fonts/subset-BwModelica-Bold.woff2';
import BBw from 'Assets/fonts/subset-BwModelica-Bold.woff';
import BEBw2 from 'Assets/fonts/subset-BwModelica-ExtraBold.woff2';
import BEBw from 'Assets/fonts/subset-BwModelica-ExtraBold.woff';

const fontFamilies = css`
  @font-face {
    font-family: 'Gauthier FY';
    src: url(${GMIw2}) format('woff2'), url(${GMIw}) format('woff');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Gauthier FY';
    src: url(${GBw2}) format('woff2'), url(${GBw}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gauthier FY';
    src: url(${GMw2}) format('woff2'), url(${GMw}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gauthier FY';
    src: url(${GRw2}) format('woff2'), url(${GRw}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gauthier FY';
    src: url(${GRIw2}) format('woff2'), url(${GRIw}) format('woff');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Gauthier FY';
    src: url(${GBIw2}) format('woff2'), url(${GBIw}) format('woff');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'Bw Modelica';
    src: url(${BRw2}) format('woff2'), url(${BRw}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Bw Modelica';
    src: url(${BBw2}) format('woff2'), url(${BBw}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Bw Modelica';
    src: url(${BEBw2}) format('woff2'), url(${BEBw}) format('woff');
    font-weight: 900;
    font-style: normal;
  }
`;

export default fontFamilies;
