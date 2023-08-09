import { Meta, StoryObj } from '@storybook/react';
import Showcase from '.'

import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

const meta: Meta<typeof Showcase> = {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto'}}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  } 
};
export default meta;

type Story = StoryObj<typeof Showcase>;

export const Basic: Story = {
  render: (args) => <Showcase {...args} />,
};

Basic.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock
}

export const WithoutTitle: Story = {
  render: (args) => <Showcase {...args} />,
};

WithoutTitle.args = {
  highlight: highlightMock,
  games: gamesMock
}

