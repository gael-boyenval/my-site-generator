import { colors, unit, fontSizes, gutter } from 'Styles/tokens';
import { rem, closestLineHeight } from 'Styles/utils';

export default `
  code[class*="language-"],
  pre[class*="language-"] {
    font-family: Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    font-size: ${rem(fontSizes.xs)};
    line-height: ${closestLineHeight(fontSizes.xs, 1.5, 12)};
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    background: ${colors.base.darkest};
    color: ${colors.base.light};

  }

  pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
    text-shadow: none;
    background: #004a9e;
  }

  pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
  code[class*="language-"]::selection, code[class*="language-"] ::selection {
    text-shadow: none;
    background: #004a9e;
  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: ${rem(unit * 3)} ${rem(gutter)};
    margin: ${rem(unit * 3)} -${rem(gutter)};
    overflow: auto;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: .1em;
    border-radius: .3em;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #4a5f78;
  }

  .token.punctuation {
    color: #4a5f78;
  }

  .token.namespace {
    opacity: .7;
  }

  .token.tag,
  .token.operator,
  .token.number {
    color: #0aa370;
  }

  .token.property,
  .token.function {
    color: #57718e;
  }

  .token.tag-id,
  .token.selector,
  .token.atrule-id {
    color: ${colors.white.light};
  }

  code.language-javascript,
  .token.attr-name {
    color: #7eb6f6;
  }

  code.language-css,
  code.language-scss,
  .token.boolean,
  .token.string,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .language-scss .token.string,
  .style .token.string,
  .token.attr-value,
  .token.keyword,
  .token.control,
  .token.directive,
  .token.unit,
  .token.statement,
  .token.regex,
  .token.atrule {
    color: ${colors.electric};
  }

  .token.placeholder,
  .token.variable {
    color: ${colors.electric};
  }

  .token.deleted {
    text-decoration: line-through;
  }

  .token.inserted {
    border-bottom: 1px dotted ${colors.white.light};
    text-decoration: none;
  }

  .token.italic {
    font-style: italic;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.important {
    color: #7eb6f6;
  }

  .token.entity {
    cursor: help;
  }

  pre > code.highlight {
    outline: .4em solid #34659d;
    outline-offset: .4em;
  }

  /* overrides color-values for the Line Numbers plugin
   * http://prismjs.com/plugins/line-numbers/
   */
  .line-numbers .line-numbers-rows {
    border-right-color: #1f2932;
  }

  .line-numbers-rows > span:before {
    color: #2c3847;
  }

  /* overrides color-values for the Line Highlight plugin
  * http://prismjs.com/plugins/line-highlight/
  */
  .line-highlight {
    background: rgba(10, 163, 112, 0.2);
    background: -webkit-linear-gradient(left, rgba(10, 163, 112, 0.2) 70%, rgba(10, 163, 112, 0));
    background: linear-gradient(to right, rgba(10, 163, 112, 0.2) 70%, rgba(10, 163, 112, 0));
  }
`;