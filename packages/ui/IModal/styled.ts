import styled from '@emotion/styled'

export const StyledIModal = styled.div`
  .${({ theme }: any) => theme.namespace} {
    &-modal-header {
      padding: 5px 30px;
      background-color: #f8fcfc;
    }

    &-modal-body {
      padding: 20px 30px 10px 30px;
      text-align: center;
    }

    &-modal-footer {
      padding: 10px 30px 30px 30px;
    }

    &-modal-close {
      top: 8px;
      inset-inline-end: 10px;

      &:hover {
        color: ${({ theme }: any) => theme.colors.primary};
        background-color: transparent;
      }
    }
  }
`
