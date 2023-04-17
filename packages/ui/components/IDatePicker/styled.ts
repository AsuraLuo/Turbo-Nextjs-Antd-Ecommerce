import styled from '@emotion/styled'

export const StyledIDatePicker = styled.div`
  .${({ theme }: any) => theme.namespace} {
    &-picker-week-panel {
      .${({ theme }: any) => theme.namespace} {
        &-picker-cell-week {
          display: none;
        }

        &-picker-content {
          > thead {
            > tr {
              > th {
                &:first-of-type {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }
`
