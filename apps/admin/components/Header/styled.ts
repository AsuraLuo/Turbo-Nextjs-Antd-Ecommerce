import styled from '@emotion/styled'

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .${({ theme }) => theme.prefix} {
    &-dropdown-trigger {
      color: ${({ theme }) => theme.colors.black};
      cursor: pointer;
    }
  }

  .header {
    &__actions {
      display: grid;
      grid-auto-flow: column;
      grid-column-gap: 0.75rem;
      align-items: center;
    }

    &__account {
      display: grid;
      grid-auto-flow: column;
      grid-column-gap: 0.5rem;
      align-items: center;
    }
  }
`
