import styled from '@emotion/styled'

export const StyledLayout: any = styled.div`
  position: relative;

  .${({ theme }) => theme.namespace}-layout-header {
    height: unset;
    line-height: unset;
  }
`

export const StyledMain = styled.div`
  padding: 0.75rem;
`
