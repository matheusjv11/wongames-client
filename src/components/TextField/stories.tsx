import { Meta, StoryObj } from '@storybook/react';
import TextField from '.'
import { Email } from '@styled-icons/material-outlined'

const meta: Meta<typeof TextField> =  {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'Email',
    initialValue: '',
    icon: <Email />,
    placeholder: 'john.cage@gmail.com'
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' }
  }
}

export default meta;

export const Default: StoryObj<typeof TextField> = {
  render: (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
  )
}

export const WithError: StoryObj<typeof TextField> = {
  render: (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} error="Ops...something is wrong" />
  </div>
  )
}