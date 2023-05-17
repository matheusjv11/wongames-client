import { render, screen } from '@testing-library/react'

import Footer from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Footer />', () => {
  it('should render 4 columns topic', () => {
    renderWithTheme(<Footer></Footer>)

    expect(screen.getByText(/contact/i)).toBeInTheDocument()
    expect(screen.getByText(/follow us/i)).toBeInTheDocument()
    expect(screen.getByText(/links/i)).toBeInTheDocument()
    expect(screen.getByText(/location/i)).toBeInTheDocument()
  })
})
