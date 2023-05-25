import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead it’s back',
    subtitle: 'Come see John’s new adventures',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2'
  }
} as Meta

export const Basic: Story = (args) => <Highlight {...args} />

