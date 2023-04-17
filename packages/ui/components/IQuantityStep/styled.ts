import styled from '@emotion/styled'

export const StyledIQuantity = styled.div`
  display: grid;
  grid-template-columns: 40px 120px 40px;

  .${({ theme }: any) => theme.namespace} {
    &-btn {
      background-color: #f5f7fa;

      &:first-of-type {
        border-right: unset;
        border-radius: 4px 0 0 4px;
      }

      &:last-of-type {
        border-left: unset;
        border-radius: 0 4px 4px 0;
      }
    }

    &-input {
      text-align: center;
      border-radius: unset;
    }
  }
`
