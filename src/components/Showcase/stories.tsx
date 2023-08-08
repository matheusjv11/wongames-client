import { Meta, StoryObj } from '@storybook/react';
import Showcase from '.'

const meta: Meta<typeof Showcase> = {
  title: 'Showcase',
  component: Showcase,
};
export default meta;

type Story = StoryObj<typeof Showcase>;

export const Basic: Story = {
  render: () => <Showcase />,
};
