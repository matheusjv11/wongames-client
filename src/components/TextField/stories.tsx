import { Meta, StoryObj } from '@storybook/react';
import TextField from '.'

const meta: Meta<typeof TextField> =  {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com'
  },
  argTypes: {
    onInput: { action: 'changed' }
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