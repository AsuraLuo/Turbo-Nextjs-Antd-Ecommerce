import { FC, useEffect, useState } from 'react'
import { IntlProvider, ReactIntlError } from 'react-intl'
import { useDispatch } from 'react-redux'
import { isEmpty } from 'lodash-es'

import { useCookie } from '@ocloud/hooks'
import { actions as i18nActions } from '@store/i18n'

import { website } from '@config/website'

const LocaleProvider: FC<any> = ({ children, ...props }) => {
  const dispatch = useDispatch()
  const { cookie } = useCookie()
  const [locale, setLocale] = useState(website.i18n.default)
  const [messages, setMessages] = useState(null)

  const onIntlError = (error: ReactIntlError) => {
    if (messages) {
      const errorCode: any = error.code
      if (errorCode === 'MISSING_TRANSLATION') {
        const Console = console
        Console.warn('Missing translation', error.message)
        return
      }

      throw error
    }
  }

  useEffect(() => {
    const fetchLocale = async () => {
      try {
        const cache = cookie.getItem('locale_code')
        const key = cache || website.i18n.default
        const json = key.replace(/-/, '_')

        // Fetch i18n locale
        const result = await fetch(`${window.location.origin}/i18n/${json}.json`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          credentials: 'same-origin',
          method: 'GET',
          mode: 'cors'
        })

        const data = await result.json()
        setLocale(key)
        setMessages({ ...data })
        dispatch(
          i18nActions.setI18nConfig({
            key,
            messages: data
          })
        )
        if (!cache) cookie.setItem('locale_code', key)
      } catch (error: any) {
        const Console = console
        Console.error(error.message)
      }
    }

    if (isEmpty(messages)) fetchLocale()
  }, [])

  return (
    <IntlProvider
      key={locale}
      defaultLocale={locale}
      locale={locale}
      messages={messages}
      {...props}
      onError={onIntlError}
    >
      {children}
    </IntlProvider>
  )
}

export default LocaleProvider
