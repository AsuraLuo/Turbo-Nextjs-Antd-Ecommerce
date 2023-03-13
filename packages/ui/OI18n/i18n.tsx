import { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { useSelector } from 'react-redux'

interface I18nProps {
  id: string
}

const I18n: FC<I18nProps> = ({ id, ...props }) => {
  const defaultMessage = useSelector((state: any) => state.i18n.defaultMessage)

  return <FormattedMessage id={id} defaultMessage={defaultMessage[id]} {...props} />
}

export default I18n
