import { Component } from 'react'
import { injectIntl } from 'react-intl'

class Locale extends Component {
  static instance: any = null

  constructor(props: any) {
    super(props)
    if (!Locale.instance) Locale.instance = this
  }

  render() {
    return false
  }
}
const CurrentLocale: any = Locale

export default injectIntl(CurrentLocale)

export const intl = () => {
  return CurrentLocale.instance?.props.intl
}

export const formatMessage = (...args: any[]) => {
  return intl().formatMessage(...args)
}
