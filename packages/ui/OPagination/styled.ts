import styled from '@emotion/styled'

export const StyledPagination = styled.div`
  .${({ theme }: any) => theme.namespace} {
    &-pagination-item {
      border-color: #bdbdbd;
    }

    &-pagination-item-active {
      background-color: #30b8bd;
      border-color: #30b8bd;

      a {
        color: #fff;
      }
    }

    &-pagination {
      .${({ theme }: any) => theme.namespace} {
        &-pagination-item-link {
          border-color: #bdbdbd;
        }
      }
    }
  }
`
