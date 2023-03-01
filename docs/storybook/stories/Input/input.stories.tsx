import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Input } from '@ecloud/ui'

const meta: ComponentMeta<typeof Input> = {
  title: 'Atomic Components/Input',
  component: (args) => <Input {...args} />
}

export default meta

export const Basic: ComponentStoryObj<typeof Input> = {
  args: {
    type: 'text',
    disabled: true
  }
}
