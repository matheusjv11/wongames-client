import * as S from './styles'

import Base from 'templates/Base'
import { Container } from 'components/Container'

import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import  { HighlightProps } from 'components/Highlight'
import BannerSlider from 'components/BannerSlider'
import Showcase from 'components/Showcase'

export type HomeTemplateProps = { 
  banners: BannerProps[],
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighligth: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighligth,
  upcommingMoreGames,
  freeGames,
  freeHighlight,
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="News" games={newGames} />
    </S.SectionNews>

    <Showcase title="Most Popular" highlight={mostPopularHighlight} games={mostPopularGames} />
    
    <S.SectionUpcoming>
      <Showcase title="Upcoming" games={upcommingGames} />
      <Showcase highlight={upcommingHighligth} games={upcommingMoreGames} />
    </S.SectionUpcoming>

    <Showcase title="Free games" highlight={freeHighlight} games={freeGames} />
  </Base>
)
export default Home
