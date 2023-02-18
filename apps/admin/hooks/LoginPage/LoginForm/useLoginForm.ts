import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useFetch } from 'use-http'
import { enc, mode, pad, AES } from 'crypto-js'
import { v4 as uuidv4 } from 'uuid'

import { useCookie } from '@ecommerce/hooks'
import { actions as userActions } from '@store/user'

export const useLoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { cookie } = useCookie()
  const { post, response, loading } = useFetch({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  const [uuid, setUuid] = useState<string>(uuidv4())

  const handleChangeUuid = (uid: string) => {
    setUuid(uid)
  }

  const handleEncryptCode = useCallback((value: string) => {
    const ivs = '1234567890123456'
    const keys = '54B218D8F2F1E2C3CB203B42F25E6B3E'
    const key = enc.Utf8.parse(keys)
    const iv = enc.Utf8.parse(ivs)
    const srcs = enc.Utf8.parse(value)
    const encrypted = AES.encrypt(srcs, key, {
      iv,
      mode: mode.CBC,
      padding: pad.Pkcs7
    })

    return encrypted.toString()
  }, [])

  const handleSubmitForm = useCallback(async (values: any) => {
    try {
      const params: URLSearchParams = new URLSearchParams()
      params.append('username', values.username)
      params.append('password', handleEncryptCode(values.password))
      params.append('deviceId', uuid)
      params.append('validCode', values.validCode)
      params.append('grant_type', 'password_code')

      const result: any = await post('/auth/user/login', params)

      if (response.ok) {
        if (result.code === '200') {
          const token: string = result.data.access_token
          cookie.setItem('access_token', token)
          dispatch(userActions.setUserToken(token))
          navigate('/')
        } else {
          // eslint-disable-next-line no-alert
          alert(result.msg)
        }
      }
    } catch (err) {
      const Console = console
      Console.log(err)
    }
  }, [])

  return {
    loading,
    uuid,
    handleChangeUuid,
    handleSubmitForm
  }
}
