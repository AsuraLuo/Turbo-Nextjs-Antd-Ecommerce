import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { OButton } from '@ocloud/ui'

const meta: ComponentMeta<typeof OButton> = {
  title: 'Atomic Components/Button',
  component: (args) => <OButton {...args}>Primary Button</OButton>,
  argTypes: { onClick: { action: 'clicked' } }
}

export default meta

export const Primary: ComponentStoryObj<typeof OButton> = {
  args: {
    type: 'primary'
  }
}
