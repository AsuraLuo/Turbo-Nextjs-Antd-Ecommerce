import styled from '@emotion/styled'

export const StyledISelect = styled.div`
  display: inline-block;
  min-width: 220px;

  .${({ theme }: any) => theme.namespace} {
    &-select {
      display: block;
    }
  }
`
