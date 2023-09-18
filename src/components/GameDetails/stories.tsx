import { Meta, StoryObj } from '@storybook/react';
import GameDetails from '.'
import mockGame from './mock'

const meta: Meta<typeof GameDetails> = {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockGame,
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check', 
      },
      options: ['windows', 'linux', 'mac']
    },
    releaseDate: {
      control: 'date'
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Role-playing', 'Narrative']
      }
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
