import styled from '@emotion/styled'

interface StyledButtonsProps {
  reverse: boolean
}

export const StyledConfirmModal = styled.div`
  .${({ theme }: any) => theme.namespace} {
    &-modal-body {
      text-align: left;
    }
  }
`

export const StyledButtons = styled.div<StyledButtonsProps>`
  display: flex;
  flex-direction: ${(props: StyledButtonsProps) => (props.reverse ? 'row-reverse' : 'row')};
  justify-content: ${(props: StyledButtonsProps) => `flex-${props.reverse ? 'start' : 'end'}`};

  button {
    &:first-of-type {
      margin-left: ${(props: StyledButtonsProps) => (props.reverse ? '8px' : 0)};
    }
  }
`
