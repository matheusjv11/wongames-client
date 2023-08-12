import { Meta, StoryObj } from '@storybook/react';
import GameInfo, { GameInfoProps } from '.'
import mockGame from './mock'

const meta: Meta<typeof GameInfo> = {
  title: 'Game/GameInfo',
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockGame
};
export default meta;

type Story = StoryObj<typeof GameInfo>;

export const Basic: Story = {
  render: (props) =>  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <GameInfo {...props} />
  </div> ,
};
