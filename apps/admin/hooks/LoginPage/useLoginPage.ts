import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCookie } from '@ecloud/hooks'

export const useLoginPage = () => {
  const navigate = useNavigate()
  const { cookie } = useCookie()
  const [isRender, setIsRender] = useState<boolean>(false)

  useEffect(() => {
    const token: string = cookie.getItem('access_token')

    if (token) {
      navigate('/')
    } else {
      setIsRender(true)
    }
  }, [cookie, navigate])

  return {
    isRender
  }
}
