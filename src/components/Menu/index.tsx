import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Logo from 'components/Logo'
import * as S from './styles'
import { useState } from 'react'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>

      <MediaMatch lessThan='medium'>
      <S.IconWrapper onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon aria-label='Open Menu' />
      </S.IconWrapper>
      </MediaMatch>
        
      <S.LogoWrapper> 
        <Logo hideOnMobile />
      </S.LogoWrapper>  

      <MediaMatch greaterThan='medium'>
        <S.MenuNav>
          <S.MenuLink href='#'>Home</S.MenuLink>
          <S.MenuLink href='#'>Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>
  
      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label='search' />
        </S.IconWrapper>
  
        <S.IconWrapper>
          <ShoppingCartIcon aria-label='open shopping cart' />
        </S.IconWrapper>

        {!username && (
          <MediaMatch greaterThan='medium'>
            <Button>Sign in</Button>
          </MediaMatch>
        )}
      </S.MenuGroup>
  
      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen} >
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        
        <S.MenuNav>
          <S.MenuLink href='#'>Home</S.MenuLink>
          <S.MenuLink href='#'>Explore</S.MenuLink>

          {!!username && (
            <>
              <S.MenuLink href='#'>My account</S.MenuLink>
              <S.MenuLink href='#'>WishList</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Button fullWidth size='large'>
              Log in now
            </Button>
            
            <span>or</span>

            <S.CreateAccount href='#' title='Sign Up'>
              Sign Up
            </S.CreateAccount>
          </S.RegisterBox>
        )}

      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
