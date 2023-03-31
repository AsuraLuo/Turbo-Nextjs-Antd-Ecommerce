import styled from '@emotion/styled'

export const StyledWangEditor = styled.div`
  z-index: 100;
  border: 1px solid #ccc;

  .wangEditor {
    &__toolbar {
      border-bottom: 1px solid #ccc;
    }

    &__editor {
      height: 350px;
      overflow-y: hidden;
    }
  }

  .w-e-text-container *,
  .w-e-toolbar * {
    padding: 0;
    margin: 0;
    outline: none;
    box-sizing: border-box;
  }

  .w-e-text-container blockquote,
  .w-e-text-container li,
  .w-e-text-container p,
  .w-e-text-container td,
  .w-e-text-container th,
  .w-e-toolbar * {
    line-height: 1.5;
  }

  .w-e-text-container {
    position: relative;
    height: 100%;
    color: var(--w-e-textarea-color);
    background-color: var(--w-e-textarea-bg-color);
  }

  .w-e-text-container .w-e-scroll {
    -webkit-overflow-scrolling: touch;
    height: 100%;
  }

  .w-e-text-container [data-slate-editor] {
    min-height: 100%;
    padding: 0 10px;
    word-wrap: break-word;
    white-space: pre-wrap;
    border-top: 1px solid transparent;
    outline: 0;
  }

  .w-e-text-container [data-slate-editor] p {
    margin: 15px 0;
  }

  .w-e-text-container [data-slate-editor] h1,
  .w-e-text-container [data-slate-editor] h2,
  .w-e-text-container [data-slate-editor] h3,
  .w-e-text-container [data-slate-editor] h4,
  .w-e-text-container [data-slate-editor] h5 {
    margin: 20px 0;
  }

  .w-e-text-container [data-slate-editor] img {
    display: inline !important;
    max-width: 100%;
    min-width: 20px;
    min-height: 20px;
    cursor: default;
  }

  .w-e-text-container [data-slate-editor] span {
    text-indent: 0;
  }

  .w-e-text-container [data-slate-editor] [data-selected='true'] {
    box-shadow: 0 0 0 2px var(--w-e-textarea-selected-border-color);
  }

  .w-e-text-placeholder {
    top: 17px;
    left: 10px;
    width: 90%;
    font-style: italic;
  }

  .w-e-max-length-info,
  .w-e-text-placeholder {
    position: absolute;
    color: var(--w-e-textarea-slight-color);
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  .w-e-max-length-info {
    right: 1em;
    bottom: 0.5em;
  }

  .w-e-bar {
    padding: 0 5px;
    font-size: 14px;
    color: var(--w-e-toolbar-color);
    background-color: var(--w-e-toolbar-bg-color);
  }

  .w-e-bar svg {
    width: 14px;
    height: 14px;
    fill: var(--w-e-toolbar-color);
  }

  .w-e-bar-show {
    display: flex;
  }

  .w-e-bar-hidden {
    display: none;
  }

  .w-e-hover-bar {
    position: absolute;
    border: 1px solid var(--w-e-toolbar-border-color);
    border-radius: 3px;
    box-shadow: 0 2px 5px #0000001f;
  }

  .w-e-toolbar {
    flex-wrap: wrap;
    position: relative;
  }

  .w-e-bar-divider {
    display: inline-flex;
    width: 1px;
    height: 40px;
    margin: 0 5px;
    background-color: var(--w-e-toolbar-border-color);
  }

  .w-e-bar-item {
    position: relative;
    display: flex;
    height: 40px;
    padding: 4px;
    text-align: center;
  }

  .w-e-bar-item,
  .w-e-bar-item button {
    align-items: center;
    justify-content: center;
  }

  .w-e-bar-item button {
    display: inline-flex;
    height: 32px;
    padding: 0 8px;
    overflow: hidden;
    color: var(--w-e-toolbar-color);
    white-space: nowrap;
    cursor: pointer;
    background: transparent;
    border: none;
  }

  .w-e-bar-item button:hover {
    color: var(--w-e-toolbar-active-color);
    background-color: var(--w-e-toolbar-active-bg-color);
  }

  .w-e-bar-item button .title {
    margin-left: 5px;
  }

  .w-e-bar-item .active {
    color: var(--w-e-toolbar-active-color);
    background-color: var(--w-e-toolbar-active-bg-color);
  }

  .w-e-bar-item .disabled {
    color: var(--w-e-toolbar-disabled-color);
    cursor: not-allowed;
  }

  .w-e-bar-item .disabled svg {
    fill: var(--w-e-toolbar-disabled-color);
  }

  .w-e-bar-item .disabled:hover {
    color: var(--w-e-toolbar-disabled-color);
    background-color: var(--w-e-toolbar-bg-color);
  }

  .w-e-bar-item .disabled:hover svg {
    fill: var(--w-e-toolbar-disabled-color);
  }

  .w-e-menu-tooltip-v5::before {
    position: absolute;
    top: 40px;
    z-index: 1;
    padding: 5px 10px;
    font-size: 0.75em;
    color: var(--w-e-toolbar-bg-color);
    text-align: center;
    white-space: pre;
    background-color: var(--w-e-toolbar-active-color);
    border-radius: 5px;
    content: attr(data-tooltip);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.6s;
  }

  .w-e-menu-tooltip-v5::after {
    position: absolute;
    top: 30px;
    border: 5px solid transparent;
    border-bottom: 5px solid var(--w-e-toolbar-active-color);
    content: '';
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.6s;
  }

  .w-e-menu-tooltip-v5:hover::after,
  .w-e-menu-tooltip-v5:hover::before {
    opacity: 1;
    visibility: visible;
  }

  .w-e-menu-tooltip-v5.tooltip-right::before {
    top: 10px;
    left: 100%;
  }

  .w-e-menu-tooltip-v5.tooltip-right::after {
    top: 16px;
    left: 100%;
    margin-left: -10px;
    border-top-color: transparent;
    border-right-color: var(--w-e-toolbar-active-color);
    border-bottom-color: transparent;
    border-left-color: transparent;
  }

  .w-e-bar-item-group .w-e-bar-item-menus-container {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: none;
    margin-top: 40px;
    background-color: var(--w-e-toolbar-bg-color);
    border: 1px solid var(--w-e-toolbar-border-color);
    border-radius: 3px;
    box-shadow: 0 2px 10px #0000001f;
  }

  .w-e-bar-item-group:hover .w-e-bar-item-menus-container {
    display: block;
  }

  .w-e-select-list {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    max-height: 350px;
    min-width: 100px;
    margin-top: 40px;
    overflow-y: auto;
    background-color: var(--w-e-toolbar-bg-color);
    border: 1px solid var(--w-e-toolbar-border-color);
    border-radius: 3px;
    box-shadow: 0 2px 10px #0000001f;
  }

  .w-e-select-list ul {
    line-height: 1;
    list-style: none;
  }

  .w-e-select-list ul .selected {
    background-color: var(--w-e-toolbar-active-bg-color);
  }

  .w-e-select-list ul li {
    position: relative;
    padding: 7px 0 7px 25px;
    text-align: left;
    white-space: nowrap;
    cursor: pointer;
  }

  .w-e-select-list ul li:hover {
    background-color: var(--w-e-toolbar-active-bg-color);
  }

  .w-e-select-list ul li svg {
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -7px;
    margin-left: 5px;
  }

  .w-e-bar-bottom .w-e-select-list {
    top: inherit;
    bottom: 0;
    margin-top: 0;
    margin-bottom: 40px;
  }

  .w-e-drop-panel {
    position: absolute;
    top: 0;
    z-index: 1;
    min-width: 200px;
    padding: 10px;
    margin-top: 40px;
    background-color: var(--w-e-toolbar-bg-color);
    border: 1px solid var(--w-e-toolbar-border-color);
    border-radius: 3px;
    box-shadow: 0 2px 10px #0000001f;
  }

  .w-e-bar-bottom .w-e-drop-panel {
    top: inherit;
    bottom: 0;
    margin-top: 0;
    margin-bottom: 40px;
  }

  .w-e-modal {
    position: absolute;
    z-index: 1;
    min-width: 100px;
    min-height: 40px;
    padding: 20px 15px 0;
    font-size: 14px;
    color: var(--w-e-toolbar-color);
    text-align: left;
    background-color: var(--w-e-toolbar-bg-color);
    border: 1px solid var(--w-e-toolbar-border-color);
    border-radius: 3px;
    box-shadow: 0 2px 10px #0000001f;
  }

  .w-e-modal .btn-close {
    position: absolute;
    top: 7px;
    right: 8px;
    padding: 5px;
    line-height: 1;
    cursor: pointer;
  }

  .w-e-modal .btn-close svg {
    width: 10px;
    height: 10px;
    fill: var(--w-e-toolbar-color);
  }

  .w-e-modal .babel-container {
    display: block;
    margin-bottom: 15px;
  }

  .w-e-modal .babel-container span {
    display: block;
    margin-bottom: 10px;
  }

  .w-e-modal .button-container {
    margin-bottom: 15px;
  }

  .w-e-modal button {
    height: 32px;
    padding: 4.5px 15px;
    font-weight: 400;
    color: var(--w-e-toolbar-color);
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    background-color: var(--w-e-modal-button-bg-color);
    border: 1px solid var(--w-e-modal-button-border-color);
    border-radius: 4px;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    touch-action: manipulation;
  }

  .w-e-modal input[type='number'],
  .w-e-modal input[type='text'],
  .w-e-modal textarea {
    width: 100%;
    padding: 4.5px 11px;
    color: var(--w-e-toolbar-color);
    background-color: var(--w-e-toolbar-bg-color);
    border: 1px solid var(--w-e-modal-button-border-color);
    border-radius: 4px;
    transition: all 0.3s;
    font-feature-settings: 'tnum';
    font-variant: tabular-nums;
  }

  .w-e-modal textarea {
    min-height: 60px;
  }

  body .w-e-modal,
  body .w-e-modal * {
    box-sizing: border-box;
  }

  .w-e-progress-bar {
    position: absolute;
    width: 0;
    height: 1px;
    background-color: var(--w-e-textarea-handler-bg-color);
    transition: width 0.3s;
  }

  .w-e-full-screen-container {
    position: fixed;
    top: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    left: 0 !important;
    display: flex !important;
    width: 100% !important;
    height: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    flex-direction: column !important;
  }

  .w-e-full-screen-container [data-w-e-textarea='true'] {
    flex: 1 !important;
  }

  .w-e-text-container [data-slate-editor] code {
    padding: 3px;
    font-family: monospace;
    background-color: var(--w-e-textarea-slight-bg-color);
    border-radius: 3px;
  }

  .w-e-panel-content-color {
    width: 230px;
    text-align: left;
    list-style: none;
  }

  .w-e-panel-content-color li {
    display: inline-block;
    padding: 2px;
    cursor: pointer;
    border: 1px solid var(--w-e-toolbar-bg-color);
    border-radius: 3px 3px;
  }

  .w-e-panel-content-color li:hover {
    border-color: var(--w-e-toolbar-color);
  }

  .w-e-panel-content-color li .color-block {
    width: 17px;
    height: 17px;
    border: 1px solid var(--w-e-toolbar-border-color);
    border-radius: 3px 3px;
  }

  .w-e-panel-content-color .active {
    border-color: var(--w-e-toolbar-color);
  }

  .w-e-panel-content-color .clear {
    width: 100%;
    margin-bottom: 5px;
    line-height: 1.5;
  }

  .w-e-panel-content-color .clear svg {
    width: 16px;
    height: 16px;
    margin-bottom: -4px;
  }

  .w-e-text-container [data-slate-editor] blockquote {
    display: block;
    padding: 10px;
    margin: 10px 0;
    font-size: 100%;
    line-height: 1.5;
    background-color: var(--w-e-textarea-slight-bg-color);
    border-left: 8px solid var(--w-e-textarea-selected-border-color);
  }

  .w-e-panel-content-emotion {
    width: 300px;
    font-size: 20px;
    text-align: left;
    list-style: none;
  }

  .w-e-panel-content-emotion li {
    display: inline-block;
    padding: 0 5px;
    cursor: pointer;
    border-radius: 3px 3px;
  }

  .w-e-panel-content-emotion li:hover {
    background-color: var(--w-e-textarea-slight-bg-color);
  }

  .w-e-textarea-divider {
    padding: 20px;
    margin: 20px auto;
    border-radius: 3px;
  }

  .w-e-textarea-divider hr {
    display: block;
    height: 1px;
    background-color: var(--w-e-textarea-border-color);
    border: 0;
  }

  /* .w-e-text-container [data-slate-editor] pre > code {
    background-color: var(--w-e-textarea-slight-bg-color);
    border: 1px solid var(--w-e-textarea-slight-border-color);
    border-radius: 4px 4px;
    display: block;
    font-size: 14px;
    padding: 10px;
    text-indent: 0;
  } */
  .w-e-text-container [data-slate-editor] .w-e-image-container {
    display: inline-block;
    margin: 0 3px;
  }

  .w-e-text-container [data-slate-editor] .w-e-image-container:hover {
    box-shadow: 0 0 0 2px var(--w-e-textarea-selected-border-color);
  }

  .w-e-text-container [data-slate-editor] .w-e-selected-image-container {
    position: relative;
    overflow: hidden;
  }

  .w-e-text-container [data-slate-editor] .w-e-selected-image-container .w-e-image-dragger {
    position: absolute;
    width: 7px;
    height: 7px;
    background-color: var(--w-e-textarea-handler-bg-color);
  }

  .w-e-text-container [data-slate-editor] .w-e-selected-image-container .left-top {
    top: 0;
    left: 0;
    cursor: nwse-resize;
  }

  .w-e-text-container [data-slate-editor] .w-e-selected-image-container .right-top {
    top: 0;
    right: 0;
    cursor: nesw-resize;
  }

  .w-e-text-container [data-slate-editor] .w-e-selected-image-container .left-bottom {
    bottom: 0;
    left: 0;
    cursor: nesw-resize;
  }

  .w-e-text-container [data-slate-editor] .w-e-selected-image-container .right-bottom {
    right: 0;
    bottom: 0;
    cursor: nwse-resize;
  }

  .w-e-text-container [data-slate-editor] .w-e-selected-image-container:hover {
    box-shadow: none;
  }

  .w-e-text-container [contenteditable='false'] .w-e-image-container:hover {
    box-shadow: none;
  }

  .w-e-text-container [data-slate-editor] .table-container {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    overflow-x: auto;
    border: 1px dashed var(--w-e-textarea-border-color);
    border-radius: 5px;
  }

  .w-e-text-container [data-slate-editor] table {
    border-collapse: collapse;
  }

  .w-e-text-container [data-slate-editor] table td,
  .w-e-text-container [data-slate-editor] table th {
    min-width: 30px;
    padding: 3px 5px;
    line-height: 1.5;
    text-align: left;
    border: 1px solid var(--w-e-textarea-border-color);
  }

  .w-e-text-container [data-slate-editor] table th {
    font-weight: 700;
    text-align: center;
    background-color: var(--w-e-textarea-slight-bg-color);
  }

  .w-e-panel-content-table {
    background-color: var(--w-e-toolbar-bg-color);
  }

  .w-e-panel-content-table table {
    border-collapse: collapse;
  }

  .w-e-panel-content-table td {
    width: 20px;
    height: 15px;
    padding: 3px 5px;
    cursor: pointer;
    border: 1px solid var(--w-e-toolbar-border-color);
  }

  .w-e-panel-content-table td.active {
    background-color: var(--w-e-toolbar-active-bg-color);
  }

  .w-e-textarea-video-container {
    padding: 10px 0;
    margin: 10px auto 0;
    text-align: center;
    background-image: linear-gradient(45deg, #eee 25%, transparent 0, transparent 75%, #eee 0, #eee),
      linear-gradient(45deg, #eee 25%, #fff 0, #fff 75%, #eee 0, #eee);
    background-position: 0 0, 10px 10px;
    background-size: 20px 20px;
    border: 1px dashed var(--w-e-textarea-border-color);
    border-radius: 5px;
  }

  .w-e-text-container [data-slate-editor] pre > code {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
    -webkit-hyphens: none;
    hyphens: none;
    line-height: 1.5;
    word-spacing: normal;
    text-align: left;
    text-shadow: 0 1px #fff;
    word-break: normal;
    word-wrap: normal;
    white-space: pre;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
  }

  .w-e-text-container [data-slate-editor] pre > code .token.cdata,
  .w-e-text-container [data-slate-editor] pre > code .token.comment,
  .w-e-text-container [data-slate-editor] pre > code .token.doctype,
  .w-e-text-container [data-slate-editor] pre > code .token.prolog {
    color: #708090;
  }

  .w-e-text-container [data-slate-editor] pre > code .token.punctuation {
    color: #999;
  }

  .w-e-text-container [data-slate-editor] pre > code .token.namespace {
    opacity: 0.7;
  }

  .w-e-text-container [data-slate-editor] pre > code .token.boolean,
  .w-e-text-container [data-slate-editor] pre > code .token.constant,
  .w-e-text-container [data-slate-editor] pre > code .token.deleted,
  .w-e-text-container [data-slate-editor] pre > code .token.number,
  .w-e-text-container [data-slate-editor] pre > code .token.property,
  .w-e-text-container [data-slate-editor] pre > code .token.symbol,
  .w-e-text-container [data-slate-editor] pre > code .token.tag {
    color: #905;
  }

  .w-e-text-container [data-slate-editor] pre > code .token.attr-name,
  .w-e-text-container [data-slate-editor] pre > code .token.builtin,
  .w-e-text-container [data-slate-editor] pre > code .token.char,
  .w-e-text-container [data-slate-editor] pre > code .token.inserted,
  .w-e-text-container [data-slate-editor] pre > code .token.selector,
  .w-e-text-container [data-slate-editor] pre > code .token.string {
    color: #690;
  }

  .w-e-text-container [data-slate-editor] pre > code .language-css .token.string,
  .w-e-text-container [data-slate-editor] pre > code .style .token.string,
  .w-e-text-container [data-slate-editor] pre > code .token.entity,
  .w-e-text-container [data-slate-editor] pre > code .token.operator,
  .w-e-text-container [data-slate-editor] pre > code .token.url {
    color: #9a6e3a;
  }

  .w-e-text-container [data-slate-editor] pre > code .token.atrule,
  .w-e-text-container [data-slate-editor] pre > code .token.attr-value,
  .w-e-text-container [data-slate-editor] pre > code .token.keyword {
    color: #07a;
  }

  .w-e-text-container [data-slate-editor] pre > code .token.class-name,
  .w-e-text-container [data-slate-editor] pre > code .token.function {
    color: #dd4a68;
  }

  .w-e-text-container [data-slate-editor] pre > code .token.important,
  .w-e-text-container [data-slate-editor] pre > code .token.regex,
  .w-e-text-container [data-slate-editor] pre > code .token.variable {
    color: #e90;
  }

  .w-e-text-container [data-slate-editor] pre > code .token.bold,
  .w-e-text-container [data-slate-editor] pre > code .token.important {
    font-weight: 700;
  }

  .w-e-text-container [data-slate-editor] pre > code .token.italic {
    font-style: italic;
  }

  .w-e-text-container [data-slate-editor] pre > code .token.entity {
    cursor: help;
  }
`
