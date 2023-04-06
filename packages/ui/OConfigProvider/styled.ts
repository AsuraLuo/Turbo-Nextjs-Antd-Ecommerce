import styled from '@emotion/styled'

export const StyledConfigProvider = styled.div`
  .${({ theme }: any) => theme.namespace} {
    &-select-item {
      &:hover {
        color: #30b8bd;
      }
    }

    &-select-item-option-selected {
      &:not(.${({ theme }: any) => theme.namespace}-select-item-option-disabled) {
        color: #30b8bd;
      }
    }
  }
`
