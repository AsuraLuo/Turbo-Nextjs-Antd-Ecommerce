import { FC } from 'react'
import { css, Global } from '@emotion/react'

const GlobalStyles = css`
  /* @font-face {
    font-family: 'karla';
    font-weight: normal;
    src: local('karla'), local('karla'), url('/fonts/karla.otf');
    src: local('karla'), local('karla'),
      url('/fonts/karla.otf?#iefix') format('embedded-opentype'), local('karla'),
      local('karla'), url('/fonts/karla.woff') format('woff'), local('karla'),
      local('karla'), url('/fonts/karla.ttf') format('truetype');
    font-display: swap;
  } */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  ul,
  ol {
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;

    li {
      list-style-type: none;
    }
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0.5rem;
  }

  address {
    font-style: normal;
  }

  img {
    height: auto;
    max-width: 100%;
    border: 0;
  }

  a {
    color: #52575d;
    transition: all 300ms;

    &:hover {
      color: #dbb19f;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
  }
`

const GlobalStyled: FC = () => {
  return <Global styles={GlobalStyles} />
}

export default GlobalStyled
