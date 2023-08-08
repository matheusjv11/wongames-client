import { Meta, StoryObj } from '@storybook/react';
import FormSignIn from '.'

const meta: Meta<typeof FormSignIn> = {
  title: 'Form/FormSignIn',
  component: FormSignIn,
};
export default meta;

type Story = StoryObj<typeof FormSignIn>;

export const Basic: Story = {
  render: () => <div style={{ width: '300px', margin: 'auto'}}><FormSignIn /></div>,
};
