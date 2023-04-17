import styled from '@emotion/styled'

export const StyledITreeSelect = styled.div`
  .${({ theme }: any) => theme.namespace} {
    &-select-dropdown {
      border-radius: 0;
    }

    &-select-tree {
      .${({ theme }: any) => theme.namespace} {
        &-select-tree-list-holder-inner {
          padding: 5px 0;
        }

        &-select-tree-checkbox {
          margin-inline-end: 8px;
          margin-block-start: 1.5px;
        }

        &-select-tree-treenode {
          width: 100%;
          padding: 3px 0;
          border-radius: unset;

          &:hover {
            background-color: #f6f8fc;
          }
        }
      }
    }
  }
`
