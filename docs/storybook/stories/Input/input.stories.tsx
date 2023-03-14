import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { OInput } from '@ocloud/ui'

const meta: ComponentMeta<typeof OInput> = {
  title: 'Atomic Components/Input',
  component: (args) => <OInput {...args} />
}

export default meta

export const Basic: ComponentStoryObj<typeof OInput> = {
  args: {
    type: 'text',
    disabled: true
  }
}
