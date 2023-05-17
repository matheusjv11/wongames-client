import Logo from 'components/Logo'
import * as S from './styles'
import Heading from 'components/Heading'
import Link from 'next/link'

const Footer = () => (
  <S.Wrapper>
      <Logo color='black' />

      <S.Content>
        <S.Column>
          <Heading color='black' size='small' lineBottom lineColor='secondary'>
            Contact
          </Heading>

          <a href='mailto:sac@testemaildonotwork.com'>sac@test.com</a>
          <a href='tel:+55 51 11111-1111111'>+55 51 11111-1111</a>
        </S.Column>

        <S.Column>
          <Heading color="black" lineColor="secondary" lineBottom size="small">
            Follow us
          </Heading>

          <nav aria-labelledby="social media">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Facebook
            </a>
          </nav>
        </S.Column>

        <S.Column>
          <Heading color="black" lineColor="secondary" lineBottom size="small">
            Links
          </Heading>
          <nav aria-labelledby="footer resources">
            <Link href="/">
              Home
            </Link>
            <Link href="/games">
              Store
            </Link>
            <Link href="/search">
              Buscar
            </Link>
          </nav>
        </S.Column>

        <S.Column aria-labelledby="footer-contact">
          <Heading color="black" lineColor="secondary" lineBottom size="small">
            Location
          </Heading>
          <span>Lorem ipsum dolor sit.</span>
          <span>Lorem Ipsum</span>
          <span>Lorem, ipsum dolor.</span>
        </S.Column>
      </S.Content>

      <S.Copyright>Won Games 2023 © All rights reserved.</S.Copyright>
  </S.Wrapper>
)
export default Footer
