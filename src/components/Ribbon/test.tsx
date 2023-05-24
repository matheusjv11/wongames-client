import { render, screen } from '@testing-library/react'

import Ribbon from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(
      screen.getByText(/best seller/i)
    ).toBeInTheDocument()
  })

  it('should render the primary color', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(
      screen.getByText(/best seller/i)
    ).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })
})
