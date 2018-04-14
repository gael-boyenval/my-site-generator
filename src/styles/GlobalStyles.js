import { injectGlobal } from 'styled-components';
import { colors, fontSizes, spaces, family, unit } from 'Styles/tokens';
import { rem, closestLineHeight } from 'Styles/utils';
import fontFamilies from 'Styles/fontFamilies';

const globalStyles = injectGlobal`
  ${fontFamilies};


  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    height:100%;
    width:100%;
    overflow: hidden;
  }

  body {
    color: ${colors.white.dark};
    font-family: ${family.serif};
    font-size: ${rem(fontSizes.s)};
    margin: 0;
    height:100%;
    width:100%;
    background: ${colors.base.darkest};
    line-height: ${closestLineHeight(fontSizes.s, 1.5, unit)};
    -webkit-font-smoothing: antialiased;
    font-variant-ligatures: common-ligatures;
  }

  [role='button'],
  [contenteditable='true'] {
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: inherit;
    transition: color 0.2s ease;

    &:hover {
      color: ${colors.electric};
    }
  }

  p, ol, ul, h2, h3 {
    margin: ${rem(unit * 2)} 0;
  }

  h1 {
    margin: ${rem(unit * 3)} 0;
  }


  form {
    margin: 0;
  }

  input[type='range'],
  input[type='text'],
  input[type='search'],
  input[type='email'],
  input[type='date'],
  input[type='password'],
  input[type='tel'],
  input[type='number'],
  input[type='checkbox'],
  input[type='radio'],
  textarea,
  select,
  button {
    margin: 0;
    -webkit-appearance: none;
    appearance: none;
    outline: none;
    border-radius: 0;
    color: inherit;
    border: none;
    background: transparent;
    font-size: inherit;
  }

  input[type='checkbox'],
  input[type='radio'] {
    width: ${rem(spaces.m)};
    height: ${rem(spaces.m)};
    vertical-align: middle;
    margin-right: ${rem(spaces.xs)};
    overflow: hidden;

    &:checked:before {
      content: '✓';
      display: block;
      height: 100%;
      width: 100%;
      text-align: center;
      line-height: 1;
    }
  }

  input[type='radio'] {
    border-radius: 50%;

    &:checked {
      background: transparent
    }

    &:checked:before {
      content: "";
      width: calc(${rem(spaces.m)} - 0.6rem);
      height: calc(${rem(spaces.m)} - 0.6rem);
      margin: 0.2rem;
      border-radius: 50%;
    }
  }

  input,
  select,
  textarea {
    font: inherit;
  }

  button,
  input[type="button"] {
    padding: 0;
    border: 0;
    background: none;
    outline: none;
    cursor: pointer;
  }
`;

export default globalStyles;
