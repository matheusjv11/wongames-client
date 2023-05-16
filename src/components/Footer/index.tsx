import Logo from 'components/Logo'
import * as S from './styles'
import Heading from 'components/Heading'

const Footer = () => (
  <S.Wrapper>
      <Logo color='black' />

      <S.Content>
        <S.Column>
          <Heading color='black' size='small' lineBottom lineColor='secondary'>
            Contact

            <a href='mailto:sac@testemaildonotwork.com'>sac@testemaildonotwork.com</a>
            <a href='tel:+55 51 11111-1111111'>+55 51 11111-1111111</a>
          </Heading>
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
      </S.Content>

  </S.Wrapper>
)
export default Footer
