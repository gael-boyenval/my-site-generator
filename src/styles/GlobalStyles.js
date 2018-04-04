import { injectGlobal } from 'styled-components';
import { colors, fontSizes, spaces, family, unit } from './tokens';
import { rem, closestLineHeight } from './utils';
import fontFamilies from './fontFamilies';

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
    overflow: auto;
    background: ${colors.base.darkest};
    line-height: ${closestLineHeight(fontSizes.s, 1.5, unit / 2)};
    -webkit-font-smoothing: antialiased;
  }

  #___gatsby {
    border: solid ${rem(spaces.s)} ${colors.white.dark};
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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-size: ${rem(fontSizes.m)};
  }

  a,
  p {
    margin: 0;
  }

  ul,
  ol,
  li,
  dl,
  dt,
  dd {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
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
