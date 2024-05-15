import { Meta, StoryFn } from '@storybook/react'

import ButtonBase from './ButtonBase'

export default {
  title: 'button/ButtonBase',
  component: ButtonBase,
} as Meta

const Template: StoryFn = args => <ButtonBase {...args}>Button</ButtonBase>

export const Primary = Template.bind({})
Primary.args = {
  variant: 'contained',
  color: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'contained',
  color: 'secondary',
}
