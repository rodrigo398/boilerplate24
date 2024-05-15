import { Meta, StoryFn } from '@storybook/react'

import TextInput, { TextInputProps } from './TextInput'

export default {
  title: 'inputs/TextInput',
  component: TextInput,
} as Meta

const Template: StoryFn<TextInputProps> = args => <TextInput {...args} />

export const Primary = Template.bind({})
Primary.args = {
  name: 'name',
  id: 'id',
  label: 'Search',
  placeholder: 'Search for something',
  color: 'primary',
}
