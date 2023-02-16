import styled from '@emotion/styled'

export const StyledMain = styled.main`
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary};

  .${({ theme }) => theme.namespace} {
    &-btn {
      font-size: 0.8rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.s}px) {
    background-color: ${({ theme }) => theme.colors.black};
  }
`
