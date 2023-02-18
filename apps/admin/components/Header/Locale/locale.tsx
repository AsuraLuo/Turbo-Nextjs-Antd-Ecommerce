import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dropdown } from 'antd'

import { I18n } from '@ecommerce/ui'
import { useCookie } from '@ecommerce/hooks'

import { website } from '@config/website'

const Locale = () => {
  const navigate = useNavigate()
  const { cookie } = useCookie()
  const [locale, setLocale] = useState<string>('')

  const locales: any[] = useMemo(() => {
    return website?.i18n?.locales ?? []
  }, [])

  const handleToggle = (key: string) => {
    cookie.setItem('locale_code', key)
    navigate(0)
  }

  const langs: any[] = useMemo(() => {
    return locales.reduce((prev: any, next: any) => {
      return [
        ...prev,
        {
          label: (
            <span
              aria-hidden="true"
              onClick={() => {
                handleToggle(next.key)
              }}
            >
              <I18n id={next.id} />
            </span>
          ),
          key: next.key
        }
      ]
    }, [])
  }, [locales])

  useEffect(() => {
    const lang: string = cookie.getItem('locale_code')
    const code: string = lang || website.i18n.default
    const match: any = locales.find((item: any) => item.key === code)
    setLocale(match.id)
  }, [cookie, locales])

  return (
    <Dropdown trigger={['click']} menu={{ items: langs }}>
      <span>{locale && <I18n id={locale} />}</span>
    </Dropdown>
  )
}

export default Locale
