import styled from '@emotion/styled'

export const StyledIQuantity = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 40px;

  .${({ theme }: any) => theme.namespace} {
    &-btn {
      border-radius: 3px 0 0 3px;
    }

    &-input {
      border-radius: 0;
    }
  }
`
