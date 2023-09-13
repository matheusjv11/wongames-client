import { Meta, StoryObj } from '@storybook/react';
import GameDetails from '.'

const meta: Meta<typeof GameDetails> = {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    platforms: ['windows', 'linux', 'mac']
  },
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check', 
      },
      options: ['windows', 'linux', 'mac']
    }
  }
};
export default meta;

type Story = StoryObj<typeof GameDetails>;

export const Basic: Story = {
  render: (args) => <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>,
};
