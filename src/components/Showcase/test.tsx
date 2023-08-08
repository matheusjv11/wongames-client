import { render, screen } from '@testing-library/react'

import Showcase from '.'

describe('<Showcase />', () => {
  it('should render the Showcase', () => {
    const { container } = render(<Showcase />)

    expect(
      screen.getByRole('Showcase', { name: /Showcase/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
