import * as S from './styles'
import Menu from 'components/Menu'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'

const Home = ({ heading }: any) => (
  <section>
    <Container>
      <Menu />
    </Container>

    <Container>
      <Heading 
        lineLeft 
        lineColor='secondary'
        color='black'
      >
        News
      </Heading>
    </Container>

    <Container>
      <Heading 
        lineLeft 
        lineColor='secondary'
      >
        { heading }
      </Heading>
    </Container>

    <Container>
      <Heading 
        lineLeft 
        lineColor='secondary'
      >
        Upcoming
      </Heading>
    </Container>

    <Container>
      <Heading 
        lineLeft 
        lineColor='secondary'
      >
        Free Games
      </Heading>
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)
export default Home
