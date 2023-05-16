import { FC } from 'react'
import { css, Global } from '@emotion/react'

const GlobalStyled = css`
  :root,
  :host {
    --w-e-textarea-bg-color: #fff;
    --w-e-textarea-color: #333;
    --w-e-textarea-border-color: #ccc;
    --w-e-textarea-slight-border-color: #e8e8e8;
    --w-e-textarea-slight-color: #d4d4d4;
    --w-e-textarea-slight-bg-color: #f5f2f0;
    --w-e-textarea-selected-border-color: #b4d5ff;
    --w-e-textarea-handler-bg-color: #4290f7;
    --w-e-toolbar-color: #595959;
    --w-e-toolbar-bg-color: #fff;
    --w-e-toolbar-active-color: #333;
    --w-e-toolbar-active-bg-color: #f1f1f1;
    --w-e-toolbar-disabled-color: #999;
    --w-e-toolbar-border-color: #e8e8e8;
    --w-e-modal-button-bg-color: #fafafa;
    --w-e-modal-button-border-color: #d9d9d9;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  input::-ms-clear,
  input::-ms-reveal {
    display: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  @-ms-viewport {
    width: device-width;
  }

  body {
    margin: 0;
  }

  [tabindex='-1']:focus {
    outline: none;
  }

  hr {
    height: 0;
    overflow: visible;
    box-sizing: content-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5em;
    font-weight: 500;
  }

  p {
    margin-top: 0;
    margin-bottom: 1em;
  }

  abbr[title],
  abbr[data-original-title] {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline;
    text-decoration: underline dotted;
    cursor: help;
    border-bottom: 0;
  }

  address {
    margin-bottom: 1em;
    font-style: normal;
    line-height: inherit;
  }

  input[type='text'],
  input[type='password'],
  input[type='number'],
  textarea {
    appearance: none;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1em;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  dt {
    font-weight: 500;
  }

  dd {
    margin-bottom: 0.5em;
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 1em;
  }

  dfn {
    font-style: italic;
  }

  b,
  strong {
    font-weight: bolder;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
    font-size: 1em;
  }

  pre {
    margin-top: 0;
    margin-bottom: 1em;
    overflow: auto;
  }

  figure {
    margin: 0 0 1em;
  }

  img {
    vertical-align: middle;
    border-style: none;
  }

  a,
  area,
  button,
  [role='button'],
  input:not([type='range']),
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }

  table {
    border-collapse: collapse;
  }

  caption {
    padding-top: 0.75em;
    padding-bottom: 0.3em;
    text-align: left;
    caption-side: bottom;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  html [type='button'],
  [type='reset'],
  [type='submit'] {
    appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  input[type='radio'],
  input[type='checkbox'] {
    padding: 0;
    box-sizing: border-box;
  }

  input[type='date'],
  input[type='time'],
  input[type='datetime-local'],
  input[type='month'] {
    appearance: listbox;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    display: block;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-bottom: 0.5em;
    font-size: 1.5em;
    line-height: inherit;
    color: inherit;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    outline-offset: -2px;
    appearance: none;
  }

  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  output {
    display: inline-block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none !important;
  }

  mark {
    padding: 0.2em;
    background-color: #feffe6;
  }
`

const IGlobalStyled: FC = () => {
  return <Global styles={GlobalStyled} />
}

export default IGlobalStyled
