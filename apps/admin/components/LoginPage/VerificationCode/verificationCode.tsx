import { FC, memo } from 'react'

import { OInput } from '@ocloud/ui'

import { useVerificationCode } from '@hooks/LoginPage'

interface VerificationCodeProps {
  uuid: string
}

const VerificationCode: FC<VerificationCodeProps> = ({ uuid, ...props }) => {
  const { verifyCode } = useVerificationCode({ uuid })

  return (
    <div>
      <OInput placeholder="请输入验证码" {...props} />
      {verifyCode && <img src={verifyCode} alt="" />}
    </div>
  )
}

export default memo(VerificationCode)
