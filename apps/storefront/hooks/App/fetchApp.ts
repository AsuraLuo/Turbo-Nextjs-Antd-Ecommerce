import { parseCookies, destroyCookie } from 'nookies'

import { I18nConf } from '@config/i18n'
import { WebsiteConf } from '@config/website'
import { actions as appActions } from '@store/app'
import { actions as i18nActions } from '@store/i18n'

interface AppContext {
  req: any
  res: any
  reduxStore: any
}

export const fetchApp = async (ctx: AppContext) => {
  const { reduxStore, req, res } = ctx
  const { dispatch } = reduxStore
  const cookies = parseCookies({ req })
  const locale: string = cookies?.locale_code ?? WebsiteConf.i18n.locale
  const viewport: string = ctx?.req?.headers?.['x-ocloud-viewport'] ?? 'desktop'
  const bolt: string = ctx?.req?.headers?.['x-ocloud-bolt'] ?? 'false'

  try {
    const i18nJson = await import(`../../public/i18n/${locale}.json`)
    await dispatch(
      appActions.setAppConfig({
        bolt: bolt === 'true',
        viewport
      })
    )
    await dispatch(
      i18nActions.setMessages({
        locale,
        messages: i18nJson.default,
        defaultMessage: I18nConf.i18n
      })
    )
  } catch (error: any) {
    destroyCookie(ctx, 'locale_code')
    res.writeHead(302, { Location: '/' })
    res.end()
  }
}
