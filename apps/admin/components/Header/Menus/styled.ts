import styled from '@emotion/styled'

export const StyledMenuGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 1.5rem;

  .${({ theme }) => theme.namespace} {
    &-btn {
      text-transform: uppercase;
      background-color: #f6f8fd;
      border-radius: 0.2rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.xxl}px) {
    grid-column-gap: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.xl}px) {
    grid-column-gap: 0.5rem;
  }
`

export const StyledMenuItem = styled.div`
  &.active {
    .${({ theme }) => theme.namespace} {
      &-btn {
        color: #6ba7b0;
      }
    }
  }
`
