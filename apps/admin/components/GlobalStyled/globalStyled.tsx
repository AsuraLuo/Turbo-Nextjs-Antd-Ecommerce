import { FC } from 'react'
import { css, Global } from '@emotion/react'

const GlobalStyles = css`
  ul,
  ol {
    padding: 0;
    margin: 0;

    li {
      list-style-type: none;
    }
  }

  p {
    margin-bottom: 0;
  }
`

const GlobalStyled: FC = () => {
  return <Global styles={GlobalStyles} />
}

export default GlobalStyled
