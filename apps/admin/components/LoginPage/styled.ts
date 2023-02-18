import styled from '@emotion/styled'

export const StyledLoginPage = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;

  .${({ theme }) => theme.prefix} {
    &-tabs {
      width: 27.5rem;
    }
  }
`
