import { Typography } from 'antd'

import InternalTypography from './typography'

const { Title, Paragraph, Text, Link } = Typography

type InternalTypographyType = typeof InternalTypography
type CompoundedComponent = InternalTypographyType & {
  Title: typeof Title
  Paragraph: typeof Paragraph
  Text: typeof Text
  Link: typeof Link
}

const OTypography = InternalTypography as CompoundedComponent
OTypography.Title = Typography.Title
OTypography.Paragraph = Typography.Paragraph
OTypography.Text = Typography.Text
OTypography.Link = Typography.Link

export default OTypography
