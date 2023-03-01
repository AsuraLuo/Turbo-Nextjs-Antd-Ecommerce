import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Button } from '@ecloud/ui'

const meta: ComponentMeta<typeof Button> = {
  title: 'Atomic Components/Button',
  component: (args) => <Button {...args}>Primary Button</Button>
}

export default meta

export const Primary: ComponentStoryObj<typeof Button> = {
  args: {
    type: 'primary'
  }
}
