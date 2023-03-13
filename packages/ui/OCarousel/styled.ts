import styled from '@emotion/styled'

export const StyledArrow = styled.div`
  .arrow {
    color: rgba(0, 0, 0, 0.85);
  }

  &.slick-disabled {
    cursor: not-allowed;

    .arrow {
      color: #ddd;
    }
  }
`
