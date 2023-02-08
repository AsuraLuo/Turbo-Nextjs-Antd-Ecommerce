import styled from '@emotion/styled'

export const StyledImagesUpload = styled.div`
  .reviews {
    &__drag {
      margin: 1rem 0;
    }

    &__add {
      position: relative;
      display: block;
      width: 6.25rem;
      height: 6.25rem;
      cursor: pointer;
      background-color: #fff;
      border: 2px #e1e1da solid;

      &::before {
        position: absolute;
        top: calc(50% - 2px);
        right: calc(50% - 1px);
        width: 2px;
        height: 1.25rem;
        margin-top: -8px;
        background-color: #e1e1da;
        content: '';
      }

      &::after {
        position: absolute;
        top: 50%;
        right: calc(50% - 10px);
        width: 1.25rem;
        height: 2px;
        margin-top: -1px;
        background-color: #e1e1da;
        content: '';
      }
    }

    &__upload {
      display: inline-grid;
      grid-auto-flow: column;
      grid-column-gap: 1.25rem;

      > li {
        position: relative;
        display: block;
        background-color: #eee;

        .image {
          display: block;
          width: 7.5rem;
          height: 7.5rem;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      }
    }

    &__close {
      position: absolute;
      top: 5px;
      right: 5px;
      width: 15px;
      height: 15px;
      min-width: unset;
      padding: 0;
      cursor: pointer;
      background: #fff url('/images/close.png') no-repeat;
      background-position: 2px 2px;
      background-size: 75%;
      border-radius: 10px;
    }
  }
`
