import { useEffect, useState } from 'react'
import { useFetch } from 'use-http'

interface VerificationCodeProps {
  uuid: string
}

export const useVerificationCode = ({ uuid }: VerificationCodeProps) => {
  const { get, response, loading } = useFetch()
  const [verifyCode, setVerifyCode] = useState<string>('')

  useEffect(() => {
    const fetchVerifyCode = async () => {
      const date: Date = new Date()
      const time: number = date.getTime()
      const result: any = await get(`/auth/validata/code/${uuid}?_t=${time}`)
      if (response.ok) {
        setVerifyCode(result.data)
      }
    }

    fetchVerifyCode()
  }, [])

  return {
    loading,
    verifyCode
  }
}
