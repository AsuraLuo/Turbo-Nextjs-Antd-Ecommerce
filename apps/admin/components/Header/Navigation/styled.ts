import styled from '@emotion/styled'

export const StyledNav = styled.nav`
  padding: 0.5rem 1rem 0;
`

export const StyledNavItem = styled.div`
  position: relative;

  .navigation {
    &__item {
      display: grid;
      grid-auto-flow: column;
      align-items: center;
    }

    &__active {
      .${({ theme }) => theme.namespace} {
        &-btn {
          background-color: rgba(0, 0, 0, 0.018);
        }
      }
    }
  }

  .${({ theme }) => theme.namespace} {
    &-btn {
      color: ${({ theme }) => theme.colors.white};

      &:hover {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`
