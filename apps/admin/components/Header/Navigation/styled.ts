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
      .${({ theme }) => theme.prefix} {
        &-btn {
          background-color: rgba(0, 0, 0, 0.018);
        }
      }
    }
  }
`
