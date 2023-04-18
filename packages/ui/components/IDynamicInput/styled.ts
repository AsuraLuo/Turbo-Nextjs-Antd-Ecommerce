import styled from '@emotion/styled'

import OSpace from '../OSpace'

export const StyledDynamicInput = styled.div`
  .${({ theme }: any) => theme.namespace} {
    &-icon {
      display: inline-block;
    }
  }
`

export const StyledOSpace = styled(OSpace)`
  display: flex;
  margin-bottom: 5px;
`
