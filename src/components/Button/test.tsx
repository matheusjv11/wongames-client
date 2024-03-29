import { render, screen } from '@testing-library/react'
import { AddShoppingCart } from '@styled-icons/material/AddShoppingCart'

import Button from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Button />', () => {
  it('should render medium size by default', () => {
    const { container} = renderWithTheme(<Button>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i})).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size='small'>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i})).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size='large'>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i})).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.0rem',
      'font-size': '1.6rem'
    })
  })

  it('should render the fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i})).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(<Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>)

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  }) 

  it('should render an minial version', () => {
    renderWithTheme(<Button icon={<AddShoppingCart data-testid="icon" />} minimal>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i})).toHaveStyle({
      background: 'none',
      color: '#F231A5'
    })

    expect(screen.getByRole('button', { name: /buy now/i})).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover'
      }
    )
  }) 

  it('should render a Button as a link', () => {
    const { debug, container } = renderWithTheme(
      <Button as="a" href='/link' >Buy now</Button>
    )
    
    // prints the html element on terminal
    debug(container)

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
