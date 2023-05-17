import { App } from 'antd'

import InternalApp from './app'

const { useApp } = App

type InternalAppType = typeof InternalApp
type CompoundedComponent = InternalAppType & {
  useApp: typeof useApp
}

const OApp = InternalApp as CompoundedComponent
OApp.useApp = useApp

export default OApp
