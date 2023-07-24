import { Meta, StoryObj } from '@storybook/react';
import Checkbox from '.'

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
  render: (args) => <Checkbox {...args} />,
};