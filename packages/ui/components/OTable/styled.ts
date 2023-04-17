import styled from '@emotion/styled'

export const StyledOTable = styled.div`
  .${({ theme }: any) => theme.namespace} {
    &-table-thead {
      tr {
        &:hover {
          th {
            background-color: #e9f4f4;
          }
        }
      }
    }

    &-table-tbody {
      tr {
        td {
          background-color: #fff;
        }
      }
    }
  }
`
