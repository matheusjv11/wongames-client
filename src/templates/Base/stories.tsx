import { Meta, StoryObj } from '@storybook/react';
import Base from '.'

const meta: Meta<typeof Base> = {
  title: 'Base',
  component: Base,
};
export default meta;

type Story = StoryObj<typeof Base>;

export const Basic: Story = {
  render: () => <Base />,
};
