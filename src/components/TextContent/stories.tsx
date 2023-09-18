import { Meta, StoryObj } from '@storybook/react';
import TextContent from '.'
import textMock from './mock'

const meta: Meta<typeof TextContent> = {
  title: 'TextContent',
  component: TextContent,
  args: textMock,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
};
export default meta;

type Story = StoryObj<typeof TextContent>;

export const Basic: Story = {
  render: (args) => <TextContent {...args} />,
};
