import styled from '@emotion/styled'

interface StyledButtonsProps {
  reverse: boolean
}

export const StyledUploadModal = styled.div`
  .${({ theme }: any) => theme.namespace} {
    &-upload {
      padding: 30px 0;
      background: transparent;
    }
  }
`

export const StyledUploadNotify = styled.p`
  margin-top: 10px;
  font-size: 13px;
  text-align: center;
`

export const StyledButtons = styled.div<StyledButtonsProps>`
  display: flex;
  flex-direction: ${(props: StyledButtonsProps) => (props.reverse ? 'row-reverse' : 'row')};
  justify-content: ${(props: StyledButtonsProps) => `flex-${props.reverse ? 'start' : 'end'}`};

  > span {
    &:first-of-type {
      margin-left: ${(props: StyledButtonsProps) => (props.reverse ? '8px' : 0)};
    }

    &:last-of-type {
      margin-left: ${(props: StyledButtonsProps) => (props.reverse ? '0' : '8px')};
    }
  }
`
