import { Meta, StoryObj } from '@storybook/react';
import FormSignUp from '.'

const meta: Meta<typeof FormSignUp> = {
  title: 'FormSignUp',
  component: FormSignUp,
};
export default meta;

type Story = StoryObj<typeof FormSignUp>;

export const Basic: Story = {
  render: () => <div style={{ width: 300, margin: 'auto' }}><FormSignUp /></div>,
};
